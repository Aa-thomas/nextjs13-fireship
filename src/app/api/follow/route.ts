import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { User } from '@prisma/client';
import { prisma } from '../../../../lib/prisma';

export const POST = async (req: Request) => {
	const session = await getServerSession(authOptions);
	const currentUserEmail = session?.user?.email!;
	const { targetUserId } = await req.json();

	const currentUserId = await prisma.user
		.findUnique({
			where: {
				email: currentUserEmail,
			},
		})
		.then((user) => user?.id!);

	const record = await prisma.follows.create({
		data: {
			followerId: currentUserId,
			followingId: targetUserId,
		},
	});

	return NextResponse.json(record);
};

export const DELETE = async (req: NextRequest) => {
	const session = await getServerSession(authOptions);
	const currentUserEmail = session?.user?.email!;
	const targetUserId = await req.nextUrl.searchParams.get('targetUserId');

	const currentUserId = await prisma.user
		.findUnique({
			where: {
				email: currentUserEmail,
			},
		})
		.then((user) => user?.id!);

	const record = await prisma.follows.delete({
		where: {
			followerId_followingId: {
				followerId: currentUserId,
				followingId: targetUserId!,
			},
		},
	});

	return NextResponse.json(record);
};
