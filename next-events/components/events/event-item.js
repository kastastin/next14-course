import Link from "next/link";

import classes from "./event-item.module.css";

export default function EventItem({ id, title, date, location, image }) {
	const exploreLink = `/events/${id}`;
	const formattedAddress = location.replace(", ", "\n");
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<li className={classes.item}>
			<img src={`/${image}`} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{formattedDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>

				<div className={classes.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}
