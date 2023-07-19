import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode | ReactNode[];
};
const ProtectedRoute = async ({ children }: Props) => {
	const session = await getServerSession();

	if (!session) {
		redirect('/api/auth/signin');
	} else {
		return <div>{children}</div>;
	}
};

export default ProtectedRoute;
