import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '../components/NavBar/NavBar';
import AuthProvider from '../components/Auth/AuthProvider';
import type { Session } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nextjs13 Tutorial',
	description: 'An app by Aaron Thomas',
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<NavBar />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
