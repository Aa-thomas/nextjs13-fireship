import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { FunctionComponent } from 'react';
import { prisma } from '../../../../lib/prisma';
import FollowClient from './FollowClient';

type FollowButtonProps = {
	targetUserId: string;
};

const FollowButton: FunctionComponent<FollowButtonProps> = async ({
	targetUserId,
}) => {
	const session = await getServerSession(authOptions);

	const currentUserId = await prisma.user
		.findFirst({
			where: {
				email: session?.user?.email!,
			},
		})
		.then((user) => user?.id!);

	const isFollowing = await prisma.follows.findFirst({
		where: {
			followerId: currentUserId,
			followingId: targetUserId,
		},
	});

	return (
		<FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
	);
};

export default FollowButton;
