'use client';

import { useSession } from 'next-auth/react';
import { AuthProps } from './AuthProvider';

const AuthCheck = ({ children }: AuthProps) => {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return <>{children}</>;
	} else {
		return null;
	}
};

export default AuthCheck;
