import Link from "next/link";
import Head from "next/head";
import ContactForm from "../components/forms/contactForm.component";
import { styles } from "../styles/pages.styles";

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`${styles.pageMain} mb-20`}>
				<h1 className={styles.h1}>Contact</h1>
				<div className="flex flex-col-reverse md:flex-row bg-primary rounded-lg md:shadow-lg">
					<div className="w-full p-5 hidden md:flex md:flex-col items-center  text-letters-light">
						<h3 className="text-center leading-8">
							Have A Question? Send It <br />
							My Way!
						</h3>
					</div>
					<div className="w-full ">
						<ContactForm />
					</div>
				</div>
			</main>
		</>
	);
}
