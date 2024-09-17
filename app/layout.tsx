import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const classBody = " bg-body";
	return (
		<html lang="en">
			<body className={inter.className + classBody}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
