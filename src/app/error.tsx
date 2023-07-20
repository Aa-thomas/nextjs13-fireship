'use client';

import { useEffect } from 'react';

type ErrorProps = {
	error: string;
	reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Oops! Looks like something went wrong!</h2>
			<button onClick={reset}>Try again</button>
		</div>
	);
};

export default Error;
