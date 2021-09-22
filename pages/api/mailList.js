import axios from "axios";

export default async function handler(req, res) {
	if (req.method === "PUT") {
		await axios
			.put(
				process.env.SENDGRID_API_URL,
				{
					contacts: [
						{ email: `${req.body.mail}` },
					],
					list_ids: [
						process.env.SENDGRID_MAILING_ID,
					],
				},
				{
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
					},
				}
			)
			.then((result) => {
				res.status(200).send({
					message:
						"Your email has been succesfully added to the mailing list. Welcome 👋",
				});
			})
			.catch((err) => {
				res.status(500).send({
					message:
						"Oops, there was a problem with your subscription, please try again or contact us",
				});
			});
	}
}
