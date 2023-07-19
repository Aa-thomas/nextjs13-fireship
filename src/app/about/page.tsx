import { Metadata } from 'next';
import { FC, FunctionComponent } from 'react';

export const metadata: Metadata = {
	title: 'About',
	description: 'We are a social media company',
};

const AboutPage: FunctionComponent = () => {
	return (
		<main>
			<h1>About</h1>
			<p>We are a social media company!</p>
		</main>
	);
};

export default AboutPage;
