import classes from "./comment-list.module.css";

export default function CommentList() {
	return (
		<ul className={classes.comments}>
			<li>
				<p>My comment is amazing!</p>
				<div>
					By <address>Maximilian</address>
				</div>
			</li>
			<li>
				<p>My comment is amazing!</p>
				<div>
					By <address>Maximilian</address>
				</div>
			</li>
		</ul>
	);
}
