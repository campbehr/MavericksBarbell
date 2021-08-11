import Link from "next/link";
import Head from "next/head";

//data
import { getAllArticles } from "../../lib/api";

export default function Articles({ allPosts: { edges } }) {
	return (
		<div>
			<Head>
				<title>Blog articles page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{console.log(edges)}
			<main className="p-5">
				<h1>Latest blog articles</h1>
				<hr />
				<section>
					{edges.map(({ node }) => (
						<div key={node.id}>
							<div>
								<figure>
									<img
										src={
											node
												.extraPostInfo
												.thumbImage
												.mediaItemUrl
										}
										alt={node.title}
									/>
								</figure>
							</div>
							<div>
								<h2>{node.title}</h2>
								<p>
									{
										node.extraPostInfo
											.authorExcerpt
									}
								</p>
								<Link
									href={`/articles/${node.slug}`}
								>
									<a>Read more </a>
								</Link>
							</div>
						</div>
					))}
				</section>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = await getAllArticles();
	return {
		props: {
			allPosts,
		},
	};
}
