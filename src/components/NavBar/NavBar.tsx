import Image from 'next/image';
import Link from 'next/link';
import logo from '../../app/images/pngegg.png';
import { SignInButton, SignOutButton } from '../Auth/Buttons';

export const NavBar = () => {
	return (
		<div className=" bg-gray-800">
			<nav className="flex items-center justify-between flex-wrap p-6 w-[90%] mx-auto max-w-1200">
				{' '}
				<Link href="/" className="relative h-16 w-16">
					<Image src={logo} alt="Logo" />
				</Link>
				<ul className="flex items-center justify-between w-[20%] gap-2">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					<li>
						<Link href="/users">Users</Link>
					</li>
					<li>
						<SignInButton />
					</li>
					<li>
						<SignOutButton />
					</li>
				</ul>
			</nav>
		</div>
	);
};
