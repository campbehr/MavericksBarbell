export default async (req, res) => {
	try {
		const response = await fetch(
			process.env.SENDGRID_API_URL,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
				},
				body: JSON.stringify({
					contacts: [
						{ email: `${req.body.mail}` },
					],
					list_ids: [
						process.env.SENDGRID_MAILING_ID,
					],
				}),
			}
		);
		if (
			response.status >= 200 ||
			response.status < 300
		) {
			res.status(200).send({
				body: {
					message:
						"Your email has been succesfully added to the mailing list. Welcome 🏋️‍♀️",
				},
			});
		} else {
			throw err;
		}
	} catch (err) {
		res.status(500).send();
	}
};
