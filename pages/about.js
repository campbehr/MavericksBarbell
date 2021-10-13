import Head from "next/head";
import { styles } from "../styles/pages.styles";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`${styles.pageMain} `}>
				<h1 className={styles.h1}>About</h1>
				<div className="w-full flex flex-col sm:flex-row bg-primary  rounded-xl">
					<div className="sm:w-half sm:h-auto">
						<img
							src="/aboutPageTop.png"
							alt="Dog sitting"
							className="rounded-t-xl sm:rounded-l-xl sm:rounded-r-none object-cover object-top  h-48 sm:h-auto w-full "
						></img>
					</div>
					<div className="p-5 sm:pt-10  sm:w-half sm:h-auto">
						<h4 className="w-full pb-2 sm:pb-5 font-mono font-bold text-2xl md:pt-2 text-secondary">
							What is Maverick's Barbell
						</h4>
						<div className="text-letters-light pb-1 sm:pb-3 text-sm md:text-lg font-sans font-medium leading-6 tracking-wide antialiased space-y-3">
							<p>
								If I'm ever in a position to
								open a gym, Maverick's
								Barbell would surely be its
								name. Not only does the name
								belong to the coolest pup on
								the east coast, but it
								represents my approach to
								both fitness and sport.
								While nothing I do or preach
								is unheard of, it is a
								little more than just
								telling you to do more reps
								or lift heavier weights. My
								goal is to help you find
								what's interesting to you in
								fitness and to give you
								enough basic knowledge and
								understanding of it so that
								you can be confident in
								going forward with your
								goals on your own.
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col sm:flex-row-reverse bg-primary rounded-xl ">
					<div className="sm:w-half sm:h-auto">
						<img
							src="/aboutPageBottom.jpg"
							alt="Dog crazy"
							className="rounded-t-xl sm:rounded-r-xl sm:rounded-l-none object-cover object-center  xs:object-top  h-48 sm:h-full w-full "
						></img>
					</div>
					<div className="p-5  sm:pt-10  sm:w-half sm:h-auto">
						<h4 className="w-full pb-2 sm:pb-5 font-mono font-bold text-2xl md:pt-2 text-secondary">
							A little about the editor
						</h4>

						<div className="text-letters-light pb-1 sm:pb-3 text-sm md:text-lg font-sans font-medium leading-6  tracking-wide antialiased space-y-3">
							<p>
								Hi, my name's Hunter, and
								I'm a die-hard fan of all
								things gym. Though my
								professional career has lead
								me into software
								development, my schooling
								and extracurricular
								activities all revolve
								around the exercise
								sciences. In the past, I've
								held numerous positions in
								varying gyms from South
								Carolina to Pennsylvania,
								all from which I learned
								differnt training styles.
								I've held certifications
								such as the Certified
								Strength and Conditioning
								Specialist (CSCS) from the
								NSCA and have worked with
								athletes in disciplines such
								as powerlifting, gymnastics,
								weightlifting, and
								plyometrics. To date I've
								ran one marathon, one 70.3
								Ironman, countless 5-10ks,
								but my true passion lies
								within strength training.
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
