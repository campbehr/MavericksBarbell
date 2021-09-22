import React from "react";
import Head from "next/head";
import Link from "next/dist/client/link";

import Spotlight from "../components/articles/articleSpotlight.component";

import {
	getAllArticles,
	getFeaturedWorkout,
	getFeaturedArticle,
	getLatestCoreArticle,
	getLatestFatBurnerArticle,
} from "../lib/wpGraphQL";

const styles = {
	h2: "w-full  text-center font-mono text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-letters-dark",
	blogSection:
		"w-full row-start-2 flex flex-col space-y-10 md:space-y-16",
};

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

			<main className="grid-rows-6 z-10 p-5 space-y-10 md:space-y-32 ">
				<section className=" w-full h-96 pt-10 row-start-1">
					<div className="flex flex-col-reverse md:flex-col justify-evenly items-center md:items-start md:pl-5 w-full h-full  bg-hero rounded-xl ">
						<img
							src="/mavCap.svg"
							alt="Picture of barbell cap of black dog"
						/>
						<h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-letters-light text-center font-semibold font-mono ">
							Maverick's Barbell
						</h1>
					</div>
				</section>

				<section className={styles.blogSection}>
					<Link href="/workouts">
						<a>
							<h2 className={styles.h2}>
								Workouts
							</h2>
						</a>
					</Link>
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
				<section className={styles.blogSection}>
					<Link href="/workouts">
						<a>
							<h2 className={styles.h2}>
								Articles
							</h2>
						</a>
					</Link>

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
