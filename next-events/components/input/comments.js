import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

export default function Comments({ eventId }) {
	const [showComments, setShowComments] = useState(false);

	function toggleCommentsHandler() {
		setShowComments((prevState) => !prevState);
	}

	function addCommentHandler(commentData) {
		// send data to API
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? "Hide" : "Show"} Comments
			</button>

			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList />}
		</section>
	);
}