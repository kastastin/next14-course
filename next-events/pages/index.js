import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function HomePaga() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}
