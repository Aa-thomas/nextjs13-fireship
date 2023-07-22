'use client';
import { useRouter } from 'next/navigation';
import { FunctionComponent, useState, useTransition } from 'react';

type FollowClientProps = {
	targetUserId: string;
	isFollowing: boolean;
};

const FollowClient: FunctionComponent<FollowClientProps> = ({
	targetUserId,
	isFollowing,
}) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [isFetching, setIsFetching] = useState(false);
	const isMutating = isFetching || isPending;

	const follow = async () => {
		setIsFetching(true);
		const res = await fetch('/api/follow', {
			method: 'POST',
			body: JSON.stringify({ targetUserId }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log(res);

		setIsFetching(false);
		startTransition(() => router.refresh());
	};

	const unfollow = async () => {
		setIsFetching(true);
		const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
			method: 'DELETE',
		});

		console.log(res);

		setIsFetching(false);
		startTransition(() => router.refresh());
	};

	if (isFollowing) {
		return (
			<button onClick={unfollow}>{!isMutating ? 'Unfollow' : '...'}</button>
		);
	} else {
		return <button onClick={follow}>{!isMutating ? 'Follow' : '...'}</button>;
	}
};

export default FollowClient;
