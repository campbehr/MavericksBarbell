import React, { useRef } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { formsStyles } from "./forms.styles";

const NewsLetterSignUpForm = () => {
	const email = useRef(null);

	const { addToast } = useToasts();

	const subscribe = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"api/subscribe",
				{ email: email.current.value }
			);
			addToast("🏋️‍♀️ Thanks for signing up! 🏋️‍♀️", {
				appearance: "success",
			});
		} catch (error) {
			addToast(
				"Something went wrong with your submission 🤷",
				{
					appearance: "error",
				}
			);
		}
	};

	return (
		<div className="w-full">
			<form
				onSubmit={subscribe}
				className="flex flex-col w-full space-y-2 md:flex-row md:justify-center "
			>
				<label htmlFor="email-input"></label>
				<input
					type="email"
					id="email-input"
					autoComplete="email"
					placeholder="Your Email"
					ref={email}
					required
					className={`${formsStyles.input}`}
				></input>
				<button
					type="submit"
					className={`${formsStyles.btn}`}
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default NewsLetterSignUpForm;
