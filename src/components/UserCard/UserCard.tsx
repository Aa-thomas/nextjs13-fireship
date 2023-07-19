import Link from 'next/link';
import styles from './UserCard.module.css';

type Props = {
	id: string;
	name: string | null;
	age: number | null;
	image: string | null;
};

const UserCard = ({ id, name, age, image }: Props) => {
	return (
		<div>
			<img
				src={image ?? '/mememan.webp'}
				alt={`${name}'s profile`}
				className={styles.cardImage}
			/>
			<div>
				<h3>
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age}</p>
			</div>
		</div>
	);
};

export default UserCard;
