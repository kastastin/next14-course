import { useRef } from "react";

import classes from "./contact-form.module.css";

export default function ContactForm() {
	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const messageInputRef = useRef();

	function sendMessageHandler(e) {
		e.preventDefault();

		const currentEmail = emailInputRef.current.value;
		const currentName = emailInputRef.current.value;
		const currentMessage = emailInputRef.current.value;

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				email: currentEmail,
				name: currentName,
				message: currentMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>

			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input type="email" id="email" required ref={emailInputRef} />
					</div>

					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" required ref={nameInputRef} />
					</div>
				</div>

				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows="5"
						required
						ref={messageInputRef}
					></textarea>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
}
