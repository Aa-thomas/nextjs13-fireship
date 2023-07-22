import React from 'react';
import { prisma } from '../../../lib/prisma';
import UserCard from '@/components/UserCard/UserCard';

const Users = async () => {
	const users = await prisma.user.findMany();
	return (
		<main className="flex flex-wrap flex-col sm:flex-row ">
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />;
			})}
		</main>
	);
};

export default Users;
