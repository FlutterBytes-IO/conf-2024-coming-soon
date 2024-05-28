import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DarkmodeProvider from "@/Context/DarkMode";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FLUTTERBYTES CONFERENCE 2024 | COMING SOON",
	description:
		"Join us at Flutterbytes conference to gain technical knowledge, and network with quality people.",
	keywords: [
		"Flutterbytes, Tech conference",
		"Technical knowledge",
		"Pitch ideas",
		"Networking",
		"Techies",
	],
	openGraph: {
		title: "FLUTTERBYTES CONFERENCE 2024 | COMING SOON",
		description:
			"Join us at Flutterbytes conference to gain technical knowledge, and network with quality people.",
		images: [
			{
				url: "/OpengraphImage.png",
				width: 800,
				height: 600,
				alt: "Flutterbytes Conference 2024",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DarkmodeProvider>{children}</DarkmodeProvider>
			</body>
		</html>
	);
}
