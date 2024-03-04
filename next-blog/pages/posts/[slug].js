import { getPostsFiles, getPostData } from "../../lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";

export default function PostDetailPage({ post }) {
	return <PostContent post={post} />;
}

export function getStaticProps(context) {
	const { slug } = context.params;
	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles();
	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}
