import React from "react";
import Link from "next/link";
import NewsLetterSignuUpForm from "../forms/newsLetterSignUpForm.component";

const Footer = () => {
	return (
		<div className="bg-primary grid  grid-cols-none lg:grid-cols-3">
			<div className="grid grid-rows-2 p-5 md:grid-rows-none md:flex md:flex-row-reverse  md:justify-between md:space-y-8  lg:col-start-2 ">
				<div className="hidden lg:block">
					{/* Spacer Block */}
				</div>
				<div className="row-start-1 flex flex-col md:items-center space-y-4  text-letters-light  ">
					<div className="flex flex-col items-center space-y-2 ">
						<p className="text-3xl md:text-4xl text-secondary text-center ">
							Sign up for my Newsletter
						</p>
						<p className="text-center text-lg text-letters-light">
							and get a free 6-week exercise
							routine
						</p>
					</div>
					<NewsLetterSignuUpForm />
				</div>
				<div className="flex items-center row-start-2  text-letters-light ">
					<div className="flex w-full justify-between text-lg md:flex-col md:space-y-4 md:text-xl ">
						<Link href="/about">
							<a>About</a>
						</Link>

						<Link href="/articles">
							<a>Articles</a>
						</Link>

						<Link href="/workouts">
							<a>Workouts</a>
						</Link>

						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
