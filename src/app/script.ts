import { prisma } from '../../lib/prisma';

() => {
	prisma.user.update({
		where: {
			name: 'Aaron Thomas',
		},
		data: {
			email: 'testtest01@gmail.com',
		},
	});
};
