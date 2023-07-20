import Image from 'next/image';
import Link from 'next/link';

type Props = {
	id: string;
	name: string | null;
	age: number | null;
	image: string | null;
};

const UserCard = ({ id, name, age, image }: Props) => {
	return (
		<div className="bg-gray-700 p-2 w-48 rounded-xl mx-2 my-2 flex flex-col items-center">
			<div className="relative h-16 w-16">
				<Image
					src={
						image ??
						`https://api.dicebear.com/6.x/initials/svg?seed=${name}`
					}
					alt={`${name}'s profile`}
					fill
				/>
			</div>
			<div className="flex flex-col items-center">
				<h3 className="my-2 text-blue-500 font-bold">
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age}</p>
			</div>
		</div>
	);
};

export default UserCard;
