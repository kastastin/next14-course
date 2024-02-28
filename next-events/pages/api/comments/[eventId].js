import { MongoClient } from "mongodb";

export default async function handler(req, res) {
	const { eventId } = req.query;

	const client = await MongoClient.connect(
		"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);

	if (req.method === "GET") {
		const db = client.db("next-events");

		const documents = await db
			.collection("comments")
			.find()
			.sort({ _id: -1 })
			.toArray();

		res.status(200).json({ comments: documents });
	}

	if (req.method === "POST") {
		const { email, name, text } = req.body;

		if (
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!text ||
			text.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			return;
		}

		const newComment = { email, name, text, eventId };

		const db = client.db("next-events");
		const result = await db.collection("comments").insertOne(newComment);

		newComment.id = result.insertedId;

		res.status(201).json({ message: "Added comment.", comment: newComment });
	}

	client.close();
}
