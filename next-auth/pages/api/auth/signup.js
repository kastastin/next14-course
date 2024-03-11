import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
	if (req.method !== "POST") return;

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

	const result = await db.collection("users").insertOne({
		email,
		password: await hashPassword(password),
	});

	res.status(201).json({ message: "Created user!" });
}
