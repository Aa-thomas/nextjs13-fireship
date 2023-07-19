import { FC, FunctionComponent } from 'react';

// Used for Incremental Static Regeneration, along ith generateStaticParams
// export const revalidate = 420;

type Post = {
	title: string;
	description: string;
	slug: string;
};

type Props = {
	params: { slug: string };
};

// Used for generating the slugs for the routes in advance.
// See more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// export const generateStaticParams = async () => {
// 	const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
// 		(res) => res.json()
// 	);

// 	return {
// 		paths: posts.map((post) => ({
// 			slug: post.slug,
// 		})),
// 	};
// };

const BlogPostPage: FunctionComponent<Props> = async ({ params }) => {
	const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
		(res) => res.json()
	);

	const post = posts.find((post) => post.slug === params.slug)!;

	return (
		<main>
			<h1>{post.title}</h1>
			<p>{post.description}</p>
		</main>
	);
};

export default BlogPostPage;
