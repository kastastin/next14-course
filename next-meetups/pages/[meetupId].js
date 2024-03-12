import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
	return (
		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
}

export async function getStaticProps(context) {
	const { meetupId } = context.params;

	const client = await MongoClient.connect(
		"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);
	const db = client.db("next-meetups");
	const meetupsCollection = db.collection("meetups");
	const selectedMeetup = await meetupsCollection.findOne({
		_id: new ObjectId(meetupId),
	});

	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				description: selectedMeetup.description,
				image: selectedMeetup.image,
			},
		},
	};
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);
	const db = client.db("next-meetups");
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
		fallback: false,
	};
}
