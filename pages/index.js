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
	h2: "w-full  text-center font-mono text-5xl sm:text-6xl lg:text-7xl text-letters-dark mb-10 md:mb-16",
	blogSection: "w-full row-start-2 flex flex-col ",
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
				<title>Maverick's Barbell</title>
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
				<section className="hidden w-full  row-start-3 bg-secondary">
					NewsLetter Banner
				</section>
				<section>
					<Link href="/about">
						<a>
							<h2 className={styles.h2}>
								About
							</h2>
						</a>
					</Link>
					<div className="w-full h-auto sm:h-96 flex flex-col sm:flex-row-reverse row-start-4 bg-primary  rounded-xl">
						<div className="sm:w-half sm:h-full">
							<img
								src="/aboutHomeImg.svg"
								alt="Dog ready to chase ball"
								className="rounded-t-xl sm:rounded-r-xl sm:rounded-l-none object-cover object-center h-48 sm:h-full w-full "
							></img>
						</div>
						<div className="p-5 sm:pt-10  sm:w-half sm:h-full">
							<Link href="/about">
								<a>
									<h4 className="w-full pb-2 sm:pb-5 font-mono font-bold text-2xl md:pt-2 text-secondary">
										More on Maverick
										<br className="xs:hidden" />
										...and me
									</h4>
								</a>
							</Link>
							<p className="text-letters-light pb-1 sm:pb-3 text-md md:text-xl font-sans font-medium">
								Aluh-hee-shibah! Lorem ipsum
								cada bipsum. Ipitty bippity
								woof cow meow!
								Aluh-hee-shibah! Lorem ipsum
								cada bipsum. Ipitty bippity
								woof cow meow!
								Aluh-hee-shibah!
							</p>
							<Link href="/about">
								<a>
									<p className="text-letters-light font-sans font-semibold underline">
										Read more
									</p>
								</a>
							</Link>
						</div>
					</div>
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
				<section className="w-full h-36 sm:h-64 row-start-6 bg-primary flex flex-col justify-center sm:justify-between items-center sm:flex-row rounded-xl">
					<div className="sm:p-5 sm:w-half">
						<h4 className="w-full pb-2 sm:pb-5 font-sans md:font-mono font-medium sm:font-bold text-lg sm:text-2xl md:text-3xl md:pt-2 text-letters-light sm:text-secondary">
							Have questions?
						</h4>
						<p className="hidden sm:block text-letters-light pb-1 sm:pb-3 text-sm md:text-xl font-sans font-medium">
							Feel free to swing over to my
							contact form and send me a
							message. I’ll do my best to
							answer your questions or at
							least try to guide you to
							someone else that can!
						</p>
					</div>
					<div className="sm:w-half">
						<Link href="/contact">
							<a>
								<h4 className="md:p-5 sm:text-center font-mono font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-secondary ">
									Contact Me
								</h4>
							</a>
						</Link>
					</div>
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
