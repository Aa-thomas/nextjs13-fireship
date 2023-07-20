import { User } from '@prisma/client';
import { prisma } from '../../../../lib/prisma';
import Image from 'next/image';
import { Metadata } from 'next';

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
		<div>
			{' '}
			<h1>{name}</h1>
			<div className="relative block h-48 w-48">
				<Image
					src={
						image ??
						`https://api.dicebear.com/6.x/initials/svg?seed=${name}&radius=50`
					}
					alt={`Avatar for ${name}`}
					fill
				/>
			</div>{' '}
			<h3>Bio</h3>
			<p>{bio}</p>
		</div>
	);
};

export default UserProfile;
