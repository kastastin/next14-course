export default function BlogPostPage({ params }) {
	return (
		<main>
			<h1>Blog Post page</h1>
			<p>{params.slug}</p>
		</main>
	);
}
