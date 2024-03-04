import { useState, useRef, useEffect } from "react";

import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

export default function ContactForm() {
	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const messageInputRef = useRef();

	const [requestStatus, setRequestStatus] = useState(); // success, error, pending
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	async function sendMessageHandler(e) {
		e.preventDefault();

		const currentEmail = emailInputRef.current.value;
		const currentName = emailInputRef.current.value;
		const currentMessage = emailInputRef.current.value;

		setRequestStatus("pending");

		try {
			await sendContactData({
				email: currentEmail,
				name: currentName,
				message: currentMessage,
			});
			setRequestStatus("success");
		} catch (error) {
			setRequestError(error.message);
			setRequestStatus("error");
		}
	}

	let notificationData;

	if (requestStatus === "pending") {
		notificationData = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way!",
		};
	}

	if (requestStatus === "success") {
		notificationData = {
			status: "success",
			title: "Success!",
			message: "Message sent successfully!",
		};
	}

	if (requestStatus === "error") {
		notificationData = {
			status: "error",
			title: "Error!",
			message: requestError,
		};
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

			{notificationData && <Notification {...notificationData} />}
		</section>
	);
}

async function sendContactData(contactDetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!");
	}
}
