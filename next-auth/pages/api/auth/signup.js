import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
	const data = req.body;
	const { email, password } = data;

	if (
		!email ||
		!email.includes("@") ||
		!password ||
		password.trim().length < 8
	) {
		res.status(422).json({ message: "Invalid input" });
		return;
	}

	const client = await connectToDatabase();
	const db = client.db("next-auth");

	const hashedPassword = hashPassword(password);

	const result = await db.collection("users").insertOne({
		email,
		password: hashedPassword,
	});

	res.status(201).json({ message: "Created user!" });
}
