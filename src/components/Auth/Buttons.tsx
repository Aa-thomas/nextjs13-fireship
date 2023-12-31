'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';

export const SignInButton = () => {
	const { data: session, status } = useSession();
	const { name, image } = session?.user ?? {};

	if (status === 'loading') {
		return (
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				...
			</button>
		);
	}

	if (status === 'authenticated') {
		return (
			<Link href="/dashboard" className="relative block h-16 w-16">
				<Image
					src={
						image ??
						`https://api.dicebear.com/6.x/initials/svg?seed=${session.user?.name}`
					}
					alt={`Avatar for ${name}`}
					fill
				/>
			</Link>
		);
	}

	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-500 h-500"
			onClick={() => signIn()}>
			Sign In
		</button>
	);
};

export const SignOutButton = () => {
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-500 h-500"
			onClick={() => signOut()}>
			Sign Out
		</button>
	);
};
