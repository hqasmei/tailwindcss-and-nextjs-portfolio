"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
	label: string;
	page: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "Home",
		page: "home",
	},
	{
		label: "About",
		page: "about",
	},
	{
		label: "Projects",
		page: "projects",
	},
];

export const Navbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	const [navbar, setNavbar] = useState(false);

	return (
		<header>
			<div className="justify-between md:items-center md:flex">
				<div>
					<div>
						<h2>Svong</h2>
					</div>
				</div>

				<div>
					{NAV_ITEMS.map((item, idx) => (
						<a key={idx}>{item.label}</a>
					))}
				</div>
			</div>
		</header>
	);
};
