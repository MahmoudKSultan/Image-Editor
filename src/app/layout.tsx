import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const IBMPLEX = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
	title: "Image Editor",
	description: "Ai-powered image editor",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: {
					colorPrimary: "#624cf5",
				},
			}}
		>
			<html lang="en">
				<body className={cn("font-IBMPLEX antialiased", IBMPLEX.variable)}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
