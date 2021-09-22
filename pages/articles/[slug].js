import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { styles } from "../../styles/pages.styles";

// data
import {
	getAllPostsWithSlug,
	getPost,
} from "../../lib/wpGraphQL";

export default function Post({ postData }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	if (!postData) {
		return (
			<p>No data could be found for the post...</p>
		);
	}

	const formatDate = (date) => {
		const newDate = new Date(date);

		return `${
			newDate.getMonth() + 1
		}/${newDate.getDate()}/${newDate.getFullYear()}`;
	};

	return (
		<div className="p-5">
			<Head>
				<title>{postData.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="space-y-20">
				<article className="space-y-4">
					<div className="space-y-10">
						<h1 className={styles.h1}>
							{postData.title}
						</h1>

						{postData.extraPostInfo.featimg ===
						null ? (
							<></>
						) : (
							<div className="w-full flex justify-center bg-secondary shadow-xl ">
								<img
									src={
										postData
											.extraPostInfo
											.featimg
											.sourceUrl
									}
									alt={postData.title}
								/>
							</div>
						)}

						<p className={styles.date}>
							{formatDate(postData.date)}
						</p>
					</div>
					<div
						dangerouslySetInnerHTML={{
							__html: postData.content,
						}}
						className="tracking-wide leading-7 space-y-6 md:space-y-10"
					/>
				</article>
				<p className={`${styles.date} text-center`}>
					<Link href="/articles">
						<a>Back To Articles</a>
					</Link>
				</p>
			</main>
		</div>
	);
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();

	return {
		paths:
			allPosts.edges.map(
				({ node }) => `/articles/${node.slug}`
			) || [],

		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const data = await getPost(params.slug);

	return {
		props: {
			postData: data.post,
		},
	};
}
