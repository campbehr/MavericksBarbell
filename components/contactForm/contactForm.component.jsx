import React from "react";
import { styles } from "../../styles/tailwindGlobals";

const ContactForm = () => {
	return (
		<form className="flex flex-col space-y-5 bg-letters-light md:p-5 md:bg-white md:rounded-r-lg">
			<label>
				<input
					type="text"
					placeholder="Name"
					className={`${styles.contactInput}`}
				/>
			</label>
			<label>
				<input
					type="text"
					placeholder="Email"
					className={`${styles.contactInput}`}
				/>
			</label>

			<div className="flex flex-wrap">
				<label
					className={`${styles.checkboxLabel}`}
				>
					<input
						type="checkbox"
						className={`${styles.checkbox}`}
					/>
					<span
						className={`${styles.checkboxSpan}`}
					>
						Workouts
					</span>
				</label>
				<label
					className={`${styles.checkboxLabel}`}
				>
					<input
						type="checkbox"
						className={`${styles.checkbox}`}
					/>
					<span
						className={`${styles.checkboxSpan}`}
					>
						Aticles
					</span>
				</label>
				<label
					className={`${styles.checkboxLabel}`}
				>
					<input
						type="checkbox"
						className={`${styles.checkbox}`}
					/>
					<span
						className={`${styles.checkboxSpan}`}
					>
						Personal
					</span>
				</label>
			</div>
			<label>
				<textarea
					placeholder="Message"
					className={`${styles.contactInput} resize-y h-24 md:h-48`}
				/>
			</label>
			<button
				type="submit"
				className={`${styles.submit} `}
			>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
