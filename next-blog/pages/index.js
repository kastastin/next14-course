import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
	{
		title: "Getting Started with Next.js",
		slug: "getting-started-with-nextjs",
		image: "getting-started-nextjs.png",
		date: "2024-02-10",
		excerpt:
			"Next.js is a popular and lightweight framework for static and server-rendered applications.",
	},
	{
		title: "Getting Started with Next.js2",
		slug: "getting-started-with-nextjs2",
		image: "getting-started-nextjs.png",
		date: "2024-02-10",
		excerpt:
			"Next.js is a popular and lightweight framework for static and server-rendered applications.",
	},
	{
		title: "Getting Started with Next.js3",
		slug: "getting-started-with-nextjs3",
		image: "getting-started-nextjs.png",
		date: "2024-02-10",
		excerpt:
			"Next.js is a popular and lightweight framework for static and server-rendered applications.",
	},
	{
		title: "Getting Started with Next.js4",
		slug: "getting-started-with-nextjs4",
		image: "getting-started-nextjs.png",
		date: "2024-02-10",
		excerpt:
			"Next.js is a popular and lightweight framework for static and server-rendered applications.",
	},
];

export default function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
}
