import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-util";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage({ posts }) {
	return (
		<>
			<Head>
				<title>Kastastin' Blog</title>
				<meta
					name="description"
					content="Programming and web development blog"
				/>
			</Head>

			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}
