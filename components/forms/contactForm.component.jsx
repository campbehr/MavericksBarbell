import React, { useRef } from "react";
import { useToasts } from "react-toast-notifications";
import { formsStyles } from "./forms.styles";

const ContactForm = () => {
	const name = useRef(null);
	const email = useRef(null);
	const message = useRef(null);
	const workouts = useRef("off");
	const articles = useRef("off");
	const training = useRef("off");

	const { addToast } = useToasts();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = {
				name: name.current.value,
				email: email.current.value,
				message: message.current.value,
				workouts: workouts.current.checked,
				articles: articles.current.checked,
				training: training.current.checked,
			};

			fetch("api/contact", {
				method: "post",
				body: JSON.stringify(data),
			}).then((result) => {
				if (
					result.status >= 200 &&
					result.status < 300
				) {
					addToast(result.data, {
						appearance: "success",
					});
				}
			});
		} catch (error) {
			addToast(error.message, {
				appearance: "error",
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-5 bg-letters-light md:p-5 md:bg-white md:rounded-r-lg"
		>
			<label htmlFor="name">
				<input
					id="name"
					type="text"
					placeholder="Name"
					ref={name}
					className={`${formsStyles.contactInput}`}
				/>
			</label>
			<label htmlFor="email">
				<input
					id="email"
					type="text"
					placeholder="Email"
					ref={email}
					className={`${formsStyles.contactInput}`}
				/>
			</label>

			<div className="flex flex-wrap">
				<label
					className={`${formsStyles.checkboxLabel}`}
				>
					<input
						id="workouts"
						type="checkbox"
						ref={workouts}
						className={`${formsStyles.checkbox}`}
					/>
					<span
						className={`${formsStyles.checkboxSpan}`}
					>
						Workouts
					</span>
				</label>
				<label
					className={`${formsStyles.checkboxLabel}`}
				>
					<input
						id="articles"
						type="checkbox"
						ref={articles}
						className={`${formsStyles.checkbox}`}
					/>
					<span
						className={`${formsStyles.checkboxSpan}`}
					>
						Articles
					</span>
				</label>
				<label
					className={`${formsStyles.checkboxLabel}`}
				>
					<input
						id="training"
						type="checkbox"
						ref={training}
						className={`${formsStyles.checkbox}`}
					/>
					<span
						className={`${formsStyles.checkboxSpan}`}
					>
						Training
					</span>
				</label>
			</div>
			<label htmlFor="message">
				<textarea
					id="message"
					type="text"
					rows="6"
					placeholder="Message"
					ref={message}
					className={`${formsStyles.contactInput} resize-y h-24 md:h-48`}
				/>
			</label>
			<button
				type="submit"
				className={`${formsStyles.btn} `}
			>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
