import { getServerSession } from 'next-auth';
import dummyPosts from './dummyPosts';

import { NextResponse } from 'next/server';

export const GET = async () => {
	const session = await getServerSession();

	return NextResponse.json(dummyPosts);
};
