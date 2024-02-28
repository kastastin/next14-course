import { MongoClient } from "mongodb";

export async function connectDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);

	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db("next-events");

	const result = await db.collection(collection).insertOne(document);
	return result;
}

export async function getAllDocuments(client, collection, sort) {
	const db = client.db("next-events");
	const documents = await db.collection(collection).find().sort(sort).toArray();

	return documents;
}
