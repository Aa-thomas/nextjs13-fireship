import { User } from '@prisma/client';
import { prisma } from '../../../../lib/prisma';
import Image from 'next/image';
import { Metadata } from 'next';
import FollowButton from '@/components/Auth/Follow/FollowButton';

type Props = {
	params: {
		id: string;
	};
};

export const generateMetaData = async ({
	params,
}: Props): Promise<Metadata> => {
	const user = await prisma.user.findUnique({
		where: { id: params.id },
	});

	return {
		title: `profile page for ${user?.name}`,
	};
};

const UserProfile = async ({ params }: Props) => {
	const user = await prisma.user.findUnique({
		where: { id: params.id },
	});
	const { name, bio, image } = user ?? {};

	return (
		<div className="flex flex-col items-center gap-5 ">
			{' '}
			<h1>{name}</h1>
			{/* <div > */}
			<Image
				src={
					image ??
					`https://api.dicebear.com/6.x/initials/svg?seed=${name}&radius=50`
				}
				alt={`Avatar for ${name}`}
				width={1000}
				height={1000}
				className="relative block h-36 w-36"
			/>
			{/* </div>{' '} */}
			<h3>Bio</h3>
			<p>{bio}</p>
			<FollowButton targetUserId={params.id} />
		</div>
	);
};

export default UserProfile;
