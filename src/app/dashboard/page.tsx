import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '../../../lib/prisma';
import ProfileForm from './ProfileForm';

const Dashboard = async () => {
	const session = await getServerSession(authOptions);
	if (!session) redirect('/api/auth/signin');

	const currentUserEmail = session?.user?.email!;
	console.log('currentUserEmail', currentUserEmail);
	const user = await prisma.user.findUnique({
		where: { email: currentUserEmail },
	});

	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-5xl mx-5 my-5">DashBoard</h1>
			<ProfileForm user={user} />
		</div>
	);
};

export default Dashboard;
