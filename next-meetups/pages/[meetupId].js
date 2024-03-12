import MeetupDetail from "../components/meetups/MeetupDetail";

export default function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D"
			title="First meetup"
			address="Random address"
			description="Description"
		/>
	);
}

export async function getStaticProps(context) {
	const { meetupId } = context.params;

	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					"https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
				title: "First meetup",
				address: "Random address",
				description: "Description",
			},
		},
	};
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}
