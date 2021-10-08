import React, { createRef, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { formsStyles } from "./forms.styles";
import { useToasts } from "react-toast-notifications";

const MailingList = () => {
	const mail = useRef(null);
	const reRef = createRef();

	const { addToast } = useToasts();

	const validate = async () => {
		try {
			const token =
				await reRef.current.executeAsync();
			reRef.current.reset();

			const response = await fetch("api/verify", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					mail: mail.current.value,
					token,
				}),
			});
			return response.json();
		} catch (err) {
			throw err;
		}
	};

	const subscribe = async (event) => {
		event.preventDefault();

		try {
			const validation = await validate();
			if (validation.data.success) {
				const response = await fetch(
					"api/mailList",
					{
						method: "PUT",
						headers: {
							"Content-Type":
								"application/json",
						},
						body: JSON.stringify({
							mail: mail.current.value,
						}),
					}
				);
				response.status === 200
					? addToast(
							"Thanks for signing up! 🏋️‍♀️",
							{
								appearance: "success",
							}
					  )
					: addToast(
							"Oops, something went wrong. Please try again or contact me directly.",
							{ appearance: "error" }
					  );
				mail.current.value = null;
			}
		} catch (err) {
			addToast(
				"Sorry, but it looks like something has gone wrong on our side. Please contact me directly and I'll add you to the list 😎",
				{ appearance: "error" }
			);
		}
	};

	return (
		<div className="w-full">
			<form
				onSubmit={subscribe}
				className="flex flex-col w-full space-y-2 md:flex-row md:justify-center "
			>
				<ReCAPTCHA
					sitekey={
						process.env
							.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
					}
					size="invisible"
					ref={reRef}
				/>
				<label htmlFor="email-input"></label>
				<input
					type="email"
					id="email-input"
					autoComplete="email"
					placeholder="Your Email"
					ref={mail}
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

export default MailingList;
