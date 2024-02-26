import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

export default function EventLogistics({ date, address, image, imageAlt }) {
	const formattedAddress = address.replace(", ", "\n");
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>

			<ul className={classes.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{formattedDate}</time>
				</LogisticsItem>

				<LogisticsItem icon={AddressIcon}>
					<address>{formattedAddress}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}
