'use client';

import { User } from '@prisma/client';
import { FC, FunctionComponent } from 'react';

type ProfileFormProps = {
	user: User | null;
};

const ProfileForm = ({ user }: ProfileFormProps) => {
	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const body = {
			name: formData.get('name'),
			bio: formData.get('bio'),
			age: formData.get('age'),
			image: formData.get('image'),
		};

		const res = await fetch('/api/user', {
			method: 'PUT',
			body: JSON.stringify(body),
		});

		await res.json();
	};

	return (
		<div>
			<h2>Edit Your Profile</h2>
			<form onSubmit={updateUser} className="flex flex-col gap-2">
				<label htmlFor="name">Name</label>
				<input
					className="text-black"
					type="text"
					name="name"
					defaultValue={user?.name ?? ''}
				/>
				<label htmlFor="bio">Bio</label>
				<textarea
					className="text-black"
					name="bio"
					cols={30}
					rows={10}
					defaultValue={user?.bio ?? ''}></textarea>
				<label htmlFor="age">Age</label>
				<input
					className="text-black"
					type="text"
					name="age"
					defaultValue={user?.age ?? 0}
				/>
				<label htmlFor="image">Profile Image URL</label>
				<input
					className="text-black"
					type="text"
					name="image"
					defaultValue={user?.image ?? ''}
				/>

				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default ProfileForm;
