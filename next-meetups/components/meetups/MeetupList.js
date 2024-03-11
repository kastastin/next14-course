import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList({ meetups }) {
	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					title={meetup.title}
					address={meetup.address}
					image={meetup.image}
				/>
			))}
		</ul>
	);
}
