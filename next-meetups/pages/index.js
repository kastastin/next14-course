import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

export default function HomePage({ meetups: loadedMeetups }) {
	return (
		<>
			<Head>
				<title>Next Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups!"
				/>
			</Head>

			<MeetupList meetups={loadedMeetups} />
		</>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);
	const db = client.db("next-meetups");
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				id: meetup._id.toString(),
				title: meetup.title,
				image: meetup.image,
				address: meetup.address,
			})),
		},
		revalidate: 10,
	};
}
