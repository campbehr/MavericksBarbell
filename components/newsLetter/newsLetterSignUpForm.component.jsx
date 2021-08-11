import React from "react";
import { useToasts } from "react-toast-notifications";

const NewsLetterSignUpForm = () => {
	const { addToast } = useToasts();

	const subscribe = async (e) => {
		e.preventDefault();
		addToast("🏋️‍♀️ Thanks for signing up! 🏋️‍♀️", {
			appearance: "success",
		});
	};

	return (
		<div className="w-full">
			<form
				onSubmit={subscribe}
				className="flex flex-col w-full space-y-2 md:flex-row md:justify-center "
			>
				<label htmlFor="email"></label>
				<input
					type="email"
					id="email"
					autoComplete="email"
					placeholder="Your Email"
					required
					className="text-center text-letters-dark text-lg md:w-full h-12 rounded-md md:rounded-r-none focus:outline-none focus:ring-2 md:focus:ring-inset focus:ring-secondary focus:border-transparent"
				></input>
				<button
					type="submit"
					className="bg-secondary text-letters-dark text-xl md:font-medium md:px-4 md:border-l-2 md:border-secondary-active font-bold h-12 rounded-md md:rounded-l-none hover:bg-secondary-active focus:outline-none focus:ring-2 md:focus:ring-inset focus:ring-secondary focus:ring-opacity-50"
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default NewsLetterSignUpForm;
