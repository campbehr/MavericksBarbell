import Head from "next/head";
import Link from "next/link";

// data
import {
	getAllPostsWithSlug,
	getPost,
} from "../../lib/wpGraphQL";

export default function Post({ postData }) {
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

			<main>
				<article>
					<div>
						<h1>{postData.title}</h1>
						<p>{formatDate(postData.date)}</p>
					</div>
					<div
						dangerouslySetInnerHTML={{
							__html: postData.content,
						}}
					/>
				</article>
				<p>
					<Link href="/workouts">
						<a>back to workouts</a>
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
				({ node }) => `/workouts/${node.slug}`
			) || [],
		revalidate: 60,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const data = await getPost(params.slug);

	return {
		props: {
			postData: data.post,
			revalidate: 60,
		},
	};
}
