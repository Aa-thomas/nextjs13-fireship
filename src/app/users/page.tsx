import React from 'react';
import { prisma } from '../../../lib/prisma';
import UserCard from '@/components/UserCard/UserCard';

const Users = async () => {
	const users = await prisma.user.findMany();
	return (
		<div>
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />;
			})}
		</div>
	);
};

export default Users;
