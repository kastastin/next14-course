import { useRef } from "react";

import classes from "./newsletter-registration.module.css";

export default function NewsletterRegistration() {
	const emailInputRef = useRef();

	function registrationHandler(event) {
		event.preventDefault();

		const currentEmail = emailInputRef.current.value;

		fetch("/api/newsletter", {
			method: "POST",
			body: JSON.stringify({ email: currentEmail }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>

			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						id="email"
						type="email"
						aria-label="Your email"
						placeholder="Your email"
						ref={emailInputRef}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}
