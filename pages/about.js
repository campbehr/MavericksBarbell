import Link from "next/link";
import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>About!</h1>
				<p>
					You can find more articles on the{" "}
					<Link href="/blog">
						<a>blog articles page</a>
					</Link>
				</p>
			</main>
		</>
	);
}
