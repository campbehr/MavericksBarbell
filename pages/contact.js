import Head from "next/head";
import ContactForm from "../components/forms/contactForm.component";
import { styles } from "../styles/pages.styles";

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`${styles.pageMain} mb-20`}>
				<h1 className={styles.h1}>Contact</h1>
				<div className="flex flex-col-reverse md:flex-row bg-primary rounded-lg md:shadow-lg">
					<div className="w-full p-5 hidden md:flex md:flex-col items-center space-y-10  text-letters-light">
						<h3 className="text-center text-secondary leading-8 font-medium font-mono text-3xl pt-2">
							Have A Question?
							<br />
							Send It My Way!
						</h3>
						<div className="space-y-12 ">
							<div className="flex items-center">
								<div className="bg-secondary w-14 h-12 rounded-l-lg">
									<img
										src="/ig.png"
										alt="ig icon"
										className="object-cover  w-full h-full rounded-l-lg"
									></img>
								</div>
								<p className="pl-5">
									Coming Soon
								</p>
							</div>
							<div className="flex items-center">
								<div className="bg-secondary w-14 h-12 rounded-l-lg">
									<img
										src="/facebook.png"
										alt="facebook icon"
										className="object-cover  w-full h-full rounded-l-lg"
									></img>
								</div>
								<p className="pl-5">
									Coming Soon
								</p>
							</div>
							<div className="flex items-center">
								<div className="bg-secondary w-14 h-12 rounded-l-lg">
									<img
										src="/youtube.png"
										alt="youtube icon"
										className="object-cover  w-full h-full rounded-l-lg"
									></img>
								</div>
								<p className="pl-5">
									Coming Soon
								</p>
							</div>
						</div>
					</div>
					<div className="w-full ">
						<ContactForm />
					</div>
				</div>
			</main>
		</>
	);
}
