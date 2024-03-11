import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);

	return client;
}
