import React, { createRef, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useToasts } from "react-toast-notifications";
import { formsStyles } from "./forms.styles";

const ContactForm = () => {
	const name = useRef(null);
	const email = useRef(null);
	const message = useRef(null);
	const workouts = useRef("off");
	const articles = useRef("off");
	const training = useRef("off");
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
					email: email.current.value,
					token,
				}),
			});
			return response.json();
		} catch (err) {
			throw err;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const validation = await validate();
			const data = {
				name: name.current.value,
				email: email.current.value,
				message: message.current.value,
				workouts: workouts.current.checked,
				articles: articles.current.checked,
				training: training.current.checked,
			};
			if (validation.data.success) {
				const response = await fetch(
					"api/contact",
					{
						method: "post",
						body: JSON.stringify(data),
					}
				);

				response.status === 200
					? addToast(
							"Thanks for your inquiry. Talk to you soon!",
							{
								appearance: "success",
							}
					  )
					: addToast(
							"Oops, something went wrong. Please try again or contact me directly.",
							{ appearance: "error" }
					  );

				name.current.value = null;
				email.current.value = null;
				message.current.value = null;
				workouts.current.checked = false;
				articles.current.checked = false;
				training.current.checked = false;
			}
		} catch (error) {
			addToast(
				"Sorry, but it looks like something has gone wrong on our side. Please contact me directly and I'll add you to the list 😎",
				{
					appearance: "error",
				}
			);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-5 bg-letters-light md:p-5 md:bg-white md:rounded-r-lg"
		>
			<ReCAPTCHA
				sitekey={
					process.env
						.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
				}
				size="invisible"
				ref={reRef}
			/>
			<label htmlFor="name">
				<input
					id="name"
					type="text"
					placeholder="Name"
					ref={name}
					className={formsStyles.contactInput}
				/>
			</label>
			<label htmlFor="email">
				<input
					id="email"
					type="text"
					placeholder="Email"
					required
					ref={email}
					className={formsStyles.contactInput}
				/>
			</label>

			<div className="flex flex-wrap">
				<label
					className={formsStyles.checkboxLabel}
				>
					<input
						id="workouts"
						type="checkbox"
						ref={workouts}
						className={formsStyles.checkbox}
					/>
					<span
						className={formsStyles.checkboxSpan}
					>
						Workouts
					</span>
				</label>
				<label
					className={formsStyles.checkboxLabel}
				>
					<input
						id="articles"
						type="checkbox"
						ref={articles}
						className={formsStyles.checkbox}
					/>
					<span
						className={formsStyles.checkboxSpan}
					>
						Articles
					</span>
				</label>
				<label
					className={formsStyles.checkboxLabel}
				>
					<input
						id="training"
						type="checkbox"
						ref={training}
						className={formsStyles.checkbox}
					/>
					<span
						className={formsStyles.checkboxSpan}
					>
						Training
					</span>
				</label>
			</div>
			<label htmlFor="message">
				<textarea
					id="message"
					required
					type="text"
					rows="6"
					placeholder="Message"
					ref={message}
					className={`${formsStyles.contactInput} resize-y h-24 md:h-48`}
				/>
			</label>
			<button
				type="submit"
				className={formsStyles.btn}
			>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
