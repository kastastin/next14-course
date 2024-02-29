import PostContent from "../../components/posts/post-detail/post-content";

const DUMMY_POSTS = {
	title: "Getting Started with Next.js",
	slug: "getting-started-with-nextjs",
	image: "getting-started-nextjs.png",
	date: "2024-02-10",
	content:
		"# This is a first post\n\nI am testing the content of the first post",
};

export default function PostDetailPage() {
	return <PostContent post={DUMMY_POSTS} />;
}
