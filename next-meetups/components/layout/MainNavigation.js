import Link from "next/link";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<div className={classes.logo}>Next Meetups</div>
			</Link>

			<nav>
				<ul>
					<li>
						<Link href="/">All Meetups</Link>
					</li>

					<li>
						<Link href="/new-meetup">Add New Meetup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
