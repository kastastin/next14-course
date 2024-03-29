import { getSession } from "next-auth/client";

import { connectToDatabase } from "../../../lib/db";
import { verifyPassword, hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
	if (req.method !== "PATCH") return;

	const session = await getSession({ req: req });

	if (!session) {
		res.status(401).json({ message: "Not authenticated!" });
		return;
	}

	const userEmail = session.user.email;
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;

	const client = await connectToDatabase();
	const usersCollection = client.db("next-auth").collection("users");
	const user = await usersCollection.findOne({ email: userEmail });

	if (!user) {
		client.close();
		res.status(404).json({ message: "User not found!" });
		return;
	}

	const currentPassword = user.password;
	const passwordsAreEqual = await verifyPassword(currentPassword, oldPassword);

	if (!passwordsAreEqual) {
		client.close();
		res.status(403).json({ message: "Invalid password." });
		return;
	}

	const result = await usersCollection.updateOne(
		{ email: userEmail },
		{ $set: { password: await hashPassword(newPassword) } }
	);

	client.close();
	res.status(200).json({ message: "Password updated!" });
}
