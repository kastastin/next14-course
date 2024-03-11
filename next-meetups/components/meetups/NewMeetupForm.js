import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({ onAddMeetup }) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(e) {
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		onAddMeetup(meetupData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input id="title" type="text" required ref={titleInputRef} />
				</div>

				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input id="image" type="url" required ref={imageInputRef} />
				</div>

				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input id="address" type="text" required ref={addressInputRef} />
				</div>

				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						rows="5"
						required
						ref={descriptionInputRef}
					/>
				</div>

				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}
