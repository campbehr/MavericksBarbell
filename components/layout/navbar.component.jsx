import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const styles = {
		sideMenu:
			"absolute right-0 inset-y-20  container box-content h-screen md:hidden transition-all duration-500 ease-in-out bg-primary",
		linksDefault:
			"absolute inset-y-20 p-4 md:relative md:flex md:inset-y-auto md:right-auto md:p-0 md:transform md:scale-x-1 transition-all duration-300 ease-in z-50 text-letters-light active:underline ",
		linksMobileOpen: " right-24",
		linksMobileClosed:
			"-right-10 transform scale-x-0  ",
	};
	const [open, setOpen] = useState(false);

	return (
		<div className="fixed w-full bg-primary grid grid-cols-none lg:grid-cols-3 shadow-2xl">
			{/* Navbar items container */}
			<div className=" lg:col-start-2 flex flex-row justify-between items-center p-5">
				{/* Logo container */}
				<div className="">
					<Link href="/">
						<img
							className="h-10 md:h-14 cursor-pointer"
							src="/navLogo.svg"
							alt="logo"
						/>
					</Link>
				</div>
				{/* Links container */}
				<div
					className={`${
						open
							? styles.linksMobileOpen
							: styles.linksMobileClosed
					} ${styles.linksDefault}`}
				>
					<div
						className={
							"flex flex-col space-y-8 md:flex-row md:space-x-6 md:space-y-0 font-mono md:font-medium text-xl md:text-2xl"
						}
						onClick={() => setOpen(!open)}
					>
						<Link href="/">
							<a>Home</a>
						</Link>

						<Link href="/about">
							<a>About</a>
						</Link>

						<Link href="/articles">
							<a>Articles</a>
						</Link>

						<Link href="/workouts">
							<a>Workouts</a>
						</Link>

						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</div>
				</div>
				{/* Mobile menu button container */}
				<div
					onClick={() => setOpen(!open)}
					className="md:hidden"
				>
					{open ? (
						<img
							src="/cancel.svg"
							alt="cancel button"
							height={25}
							width={25}
						/>
					) : (
						<img
							src="/menu.svg"
							alt="menu button"
							height={25}
							width={25}
						/>
					)}
				</div>
				{/* Side menu for mobile and tablet view  */}

				<div
					className={`${styles.sideMenu} ${
						open ? "w-60" : "w-0"
					}`}
				></div>
			</div>
		</div>
	);
};

export default Navbar;
