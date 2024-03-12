import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
		address: "Some address 5, 12345 Some City",
		description: "This is a first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://images.unsplash.com/photo-1634120663136-72dffeafa209?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvY2FsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
		address: "Random address 12, 78320 Random City",
		description: "This is a second meetup!",
	},
];

export default function HomePage() {
	return (
		<div>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</div>
	);
}
