import React, { useRef } from "react";
import axios from "axios";
import { formsStyles } from "./forms.styles";
import { useToasts } from "react-toast-notifications";

const MailingList = () => {
	const mail = useRef(null);

	const { addToast } = useToasts();

	const subscribe = async (event) => {
		event.preventDefault();
		recaptchaRef.current.execute();
		await axios
			.put("api/mailList", {
				mail: mail.current.value,
			})
			.then((result) => {
				if (result.status === 200) {
					addToast(result.data.message, {
						appearance: "success",
					});
				}
			})
			.catch((err) => {
				addToast(
					"Oops, there was an issue on our end. Please contact us and we will get you subscribed.",
					{
						appearance: "error",
					}
				);
			});
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
