import Head from "next/head";
import { styles } from "../styles/pages.styles";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`${styles.pageMain} mb-20`}>
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
						<h4 className="w-full pb-2 sm:pb-5 font-mono font-bold text-xl xs:text-2xl md:pt-2 text-secondary">
							What is Maverick's Barbell
						</h4>

						<p className="text-letters-light pb-1 sm:pb-3 text-sm md:text-lg font-sans font-medium">
							Aluh-hee-shibah! Lorem ipsum
							cada bipsum. Ipitty bippity woof
							cow meow! Aluh-hee-shibah! Lorem
							ipsum cada bipsum. Ipitty
							bippity woof cow meow!
							Aluh-hee-shibah!cada bipsum.
							Ipitty bippity woof cow meow!
							Aluh-hee-shibah!cada bipsum.
							Ipitty bippity woof cow meow!
							Aluh-hee-shibah!ity woof cow
							meow! Aluh-hee-shibah!cada
							bipsum. Ipitty bippity woof cow
							meow! Aluh-hee-shibah!cada
							bipsum.
						</p>
					</div>
				</div>
				<div className="w-full flex flex-col sm:flex-row-reverse bg-primary  rounded-xl">
					<div className="sm:w-half sm:h-auto">
						<img
							src="/aboutPageBottom.jpg"
							alt="Dog crazy"
							className="rounded-t-xl sm:rounded-r-xl sm:rounded-l-none object-cover object-center  xs:object-top  h-48 sm:h-full w-full "
						></img>
					</div>
					<div className="p-5  sm:pt-10  sm:w-half sm:h-auto">
						<h4 className="w-full pb-2 sm:pb-5 font-mono font-bold text-xl xs:text-2xl md:pt-2 text-secondary">
							A little about the editor
						</h4>

						<p className="text-letters-light pb-1 sm:pb-3 text-sm md:text-lg font-sans font-medium">
							Aluh-hee-shibah! Lorem ipsum
							cada bipsum. Ipitty bippity woof
							cow meow! Aluh-hee-shibah! Lorem
							ipsum cada bipsum. Ipitty
							bippity woof cow meow!
							Aluh-hee-shibah!cada bipsum.
							Ipitty bippity woof cow meow!
							Aluh-hee-shibah!cada bipsum.
							Ipitty bippity woof cow meow!
							Aluh-hee-shibah!ity woof cow
							meow! Aluh-hee-shibah!cada
							bipsum. Ipitty bippity woof cow
							meow! Aluh-hee-shibah!cada
							bipsum.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
