import { useState, useEffect, useContext } from "react";

import NotificationContext from "../../store/notification-context";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

export default function Comments({ eventId }) {
	const notificationCtx = useContext(NotificationContext);
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);
			fetch(`/api/comments/${eventId}`)
				.then((response) => response.json())
				.then((data) => {
					setComments(data.comments);
					setIsFetchingComments(false);
				});
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments((prevState) => !prevState);
	}

	function addCommentHandler(commentData) {
		notificationCtx.showNotification({
			title: "Sending comment...",
			message: "Your comment is currently being stored into a database.",
			status: "pending",
		});

		fetch(`/api/comments/${eventId}`, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				return response.json().then((data) => {
					throw new Error(data.message || "Something went wrong!");
				});
			})
			.then((data) => {
				notificationCtx.showNotification({
					title: "Success!",
					message: "Your comment was saved.",
					status: "success",
				});
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: "Error!",
					message: error.message || "Something went wrong.",
					status: "error",
				});
			});
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? "Hide" : "Show"} Comments
			</button>

			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && !isFetchingComments && <CommentList items={comments} />}
			{showComments && isFetchingComments && <p>Loading...</p>}
		</section>
	);
}
