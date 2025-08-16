import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'M Harsha Deepan',
	description:
		'Yo! I am Harsha, ì like coding and hardware development. I Have also made a bunch of projects for specific use cases.',
	keywords: [
		'Hobbyist',
	],
	authors: [{ name: 'M Harsha Deepan' }],
	creator: 'M Harsha Deepan',
	openGraph: {
		title: 'M Harsha Deepan - Hobbyist Portfolio',
		description: 'Yo! I am Harsha, ì like coding and hardware development. I Have also made a bunch of projects for specific use cases.',
		url: 'https://your-domain.com',
		siteName: 'M Harsha Deepan',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'M Harsha Deepan',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'M Harsha Deepan',
		description: 'Explore my twitter.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
