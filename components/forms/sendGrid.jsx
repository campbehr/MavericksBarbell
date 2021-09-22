import React, { useRef } from "react";
import axios from "axios";
import { formsStyles } from "./forms.styles";
import { useToasts } from "react-toast-notifications";

const MailingList = () => {
	const mail = useRef(null);

	const { addToast } = useToasts();

	const subscribe = async (event) => {
		event.preventDefault();
		try {
			await axios
				.put("api/mailList", {
					mail: mail.current.value,
				})
				.then(
					addToast("Thanks for reaching out!", {
						appearance: "success",
					})
				);
		} catch (error) {
			addToast(
				"Oops, there was a problem with your subscription, please try again or contact us.",
				{
					appearance: "error",
				}
			);
		}
	};
	// try {
	// 	const response = await axios.put(
	// 		"api/mailList",
	// 		{mail: mail.current.value}
	// 		)
	//  .then((response) => {
	// if (
	// 	response.status >= 200 &&
	// 	response.status < 300
	// ) {
	// 	addToast(response.data.message, {
	// 		appearance: "success",
	// 	});
	// }
	// 	})}.catch((err) => {
	// 		addToast(
	// 			"Oops, there was a problem with your subscription, please try again or contact us.",
	// 			{
	// 				appearance: "error",
	// 			}
	// 		);
	// 	});
	// };
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
