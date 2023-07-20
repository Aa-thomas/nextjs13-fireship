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
	const { name, bio } = user ?? {};
	const image = null;

	return (
		<div>
			{' '}
			<h1>{name}</h1>
			<div className="relative block h-16 w-16">
				<Image
					src={
						image ??
						`https://api.dicebear.com/6.x/initials/svg?seed=${name}&radius=50`
					}
					alt={`Avatar for ${name}`}
					fill
				/>
			</div>{' '}
			<h3>{bio}</h3>
		</div>
	);
};

export default UserProfile;
