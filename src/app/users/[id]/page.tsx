import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export const GET = async () => {
	const users = await prisma.user.findMany();
	console.log(users);
	return NextResponse.json(users);
};
