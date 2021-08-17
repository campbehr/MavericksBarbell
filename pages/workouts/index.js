import Link from "next/link";
import Head from "next/head";

//data
import { getAllWorkouts } from "../../lib/wpGraphQL";

export default function Workouts({ allPosts: { edges } }) {
	return (
		<div>
			<Head>
				<title>Workouts page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{console.log(edges)}
			<main className="p-5">
				<h1>Latest Workouts</h1>
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
									href={`/workouts/${node.slug}`}
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
	const allPosts = await getAllWorkouts();
	return {
		props: {
			allPosts,
		},
	};
}
