import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";

export default function PostItem({ post }) {
	const linkPath = `/posts/${post.slug}`;
	const imagePath = `/images/posts/${post.slug}/${post.image}`;
	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<div className={classes.image}>
					<Image
						src={imagePath}
						alt={post.title}
						width={300}
						height={200}
						layout="responsive"
					/>
				</div>

				<div className={classes.content}>
					<h3>{post.title}</h3>
					<time>{formattedDate}</time>
					<p>{post.excerpt}</p>
				</div>
			</Link>
		</li>
	);
}
