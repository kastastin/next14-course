import { useRef } from "react";

import classes from "./profile-form.module.css";

export default function ProfileForm({ onChangePassword }) {
	const newPasswordInputRef = useRef();
	const oldPasswordInputRef = useRef();

	function submitHandler(e) {
		e.preventDefault();

		const enteredNewPassword = newPasswordInputRef.current.value;
		const enteredOldPassword = oldPasswordInputRef.current.value;

		onChangePassword({
			newPassword: enteredNewPassword,
			oldPassword: enteredOldPassword,
		});
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input id="new-password" type="password" ref={newPasswordInputRef} />
			</div>

			<div className={classes.control}>
				<label htmlFor="old-password">Old Password</label>
				<input id="old-password" type="password" ref={oldPasswordInputRef} />
			</div>

			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
}
