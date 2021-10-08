export default async (req, res) => {
	const secret = process.env.RECAPTCHA_SECRET_KEY;
	const token = req.body.token;

	try {
		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
			{
				method: "POST",
			}
		);

		const data = await response.json();
		if (data.success) {
			res.status(200).send({
				data: {
					...data,
					message: "Validation successful!",
				},
			});
		} else {
			throw err;
		}
	} catch (err) {
		res.status(500).send();
	}
};
