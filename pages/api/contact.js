const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
	const body = JSON.parse(req.body);

	const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Workouts: ${body.workouts}\r\n
        Articles: ${body.articles}\r\n
        Training: ${body.training}\r\n
        Message: ${body.message}
    `;

	const data = {
		to: process.env.SENDGRID_SENDER_EMAIL,
		from: process.env.SENDGRID_RECEIVER_EMAIL,
		subject: `New message from ${body.name}`,
		text: message,
		html: message.replace(/\r\n/g, "<br />"),
	};

	try {
		await mail.send(data);
		res.status(200).json({
			status: "OK",
			message:
				"Thanks for your message, I'll get back to you soon!",
		});
	} catch (err) {
		res.status(500).json({
			status: "Fail",
			message: "Something went wrong.",
		});
	}
};
