"use client"
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
	// const segment = useSelectedLayoutSegments();
	// console.log(segment);
	return (
		<main className="root">
			{/* Sidebar */}
			<Sidebar />
			{/* MoobileNav */}
			<MobileNav />
			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
		</main>
	);
}

export default Layout;
