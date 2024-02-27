import classes from "./newsletter-registration.module.css";

export default function NewsletterRegistration() {
	function registrationHandler(event) {
		event.preventDefault();

		// fetch user input (state or refs)
		// optional: validate input
		// send valid data to API
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
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}