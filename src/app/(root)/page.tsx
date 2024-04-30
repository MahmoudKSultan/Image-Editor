import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Test from "@/components/Test";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
	return (
		<div>
			<br />
			<Link href="/profile#special-lorem">profile</Link>
			<br />
			<p className="">Home</p>
			<Test />
			{/* <UserButton afterSignOutUrl="/" /> */}
			<Link
				href={{
					pathname: "profile",
					query: {
						age: 24,
						name: "mahmoud",
					},
				}}
				replace
			>
				Profile
			</Link>
		</div>
	);
}

export default Home;
