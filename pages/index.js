import React from "react";
import Head from "next/head";

import Spotlight from "../components/articles/articleSpotlight.component";

import {
	getAllArticles,
	getFeaturedWorkout,
	getFeaturedArticle,
	getLatestCoreArticle,
	getLatestFatBurnerArticle,
} from "../lib/wpGraphQL";

export default function Home({ allStaticProps }) {
	const featuredArticle =
		allStaticProps.featuredArticle.edges[0].node;
	const latestArticleOne =
		allStaticProps.latestArticles.edges[0].node;
	const latestArticleTwo =
		allStaticProps.latestArticles.edges[1].node;
	const featuredWorkout =
		allStaticProps.featuredWorkout.edges[0].node;
	const core =
		allStaticProps.latestCoreArticle.edges[0].node;
	const fatBurner =
		allStaticProps.latestFatBurnerArticle.edges[0].node;
	return (
		<>
			<Head>
				<title>Hunter Campbell Fitness</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="grid-rows-6 z-10 p-5 space-y-10">
				<section className="w-full h-screen row-start-1">
					<div className="w-full h-full  bg-secondary">
						Hero
					</div>
				</section>

				<section className="w-full row-start-2 flex flex-col space-y-10 md:space-y-16">
					<h2 className="w-full  text-center font-sans text-3xl xs:text-4xl sm:text-5xl lg:text-7xl text-letters-dark">
						Featured Workouts
					</h2>
					<div className="md:flex md:flex-row md:space-x-8 space-y-8 md:space-y-0">
						<div className="flex md:w-full">
							<Spotlight
								props={featuredWorkout}
							/>
						</div>
						<div className="flex flex-col md:justify-between  space-y-8">
							<div>
								<Spotlight
									props={core}
									feat={false}
								/>
							</div>
							<div>
								<Spotlight
									props={fatBurner}
									feat={false}
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="hidden w-full row-start-3 bg-secondary">
					NewsLetter Banner
				</section>
				<section className="w-full h-96 row-start-4 bg-primary text-color-letters">
					About Excerpt
				</section>
				<section className="w-full row-start-2 flex flex-col space-y-10 md:space-y-16">
					<h2 className="w-full  text-center font-sans text-3xl xs:text-4xl sm:text-5xl lg:text-7xl text-letters-dark">
						Featured Articles
					</h2>
					<div className="md:flex md:flex-row-reverse  md:space-x-8 md:space-x-reverse space-y-8 md:space-y-0 ">
						<div className="flex md:w-full ">
							<Spotlight
								props={featuredArticle}
							/>
						</div>
						<div className="flex flex-col md:justify-between  space-y-8">
							<div>
								<Spotlight
									props={latestArticleOne}
									feat={false}
								/>
							</div>
							<div>
								<Spotlight
									props={latestArticleTwo}
									feat={false}
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full h-64 row-start-6 bg-secondary">
					Contact
				</section>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const featuredArticle = await getFeaturedArticle();
	const latestArticles = await getAllArticles(2);
	const featuredWorkout = await getFeaturedWorkout();
	const latestCoreArticle = await getLatestCoreArticle();
	const latestFatBurnerArticle =
		await getLatestFatBurnerArticle();

	const allStaticProps = {
		featuredArticle,
		latestCoreArticle,
		latestFatBurnerArticle,
		latestArticles,
		featuredWorkout,
	};
	return {
		props: {
			allStaticProps,
			// featuredArticle,
			// latestCoreArticle,
		},
		revalidate: 60,
	};
}
