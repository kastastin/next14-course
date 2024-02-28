import { MongoClient } from "mongodb";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes("@")) {
			res.status(422).json({ message: "Invalid email address." });
			return;
		}

		const client = await MongoClient.connect(
			"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
		);
		const db = client.db("next-events");

		await db.collection("emails").insertOne({ email: userEmail });
		client.close();

		res.status(201).json({ message: "Signed up!" });
	}
}
