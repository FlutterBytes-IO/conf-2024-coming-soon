/* eslint-disable react/display-name */
"use client";

import { useContext, forwardRef } from "react";
import Image from "next/image";
import { DarkmodeContext } from "@/Context/DarkMode";

import Button from "../Button";
import NavLogoDark from "@/images/NavLogoDark.svg";
import NavLogoLight from "@/images/NavLogoLight.svg";
import DarkModeIcon, { LightModeIcon } from "../vectors/ModeIcon";

interface NavbarProps {
	handleClick?: () => void;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
	({ handleClick }, ref) => {
		const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);
		return (
			<div
				ref={ref}
				className={`px-5 md:px-[100px] bg-opacity-[88%] blur-[4%] py-3 transition-all z-20 duration-500 flex items-center justify-between border-b fixed w-full ${
					isDarkmode
						? "border-[#1167B1] hero-grad-dark"
						: "border-[#D0EFFF] bg-white"
				}`}
			>
				<div>
					<Image
						src={isDarkmode ? NavLogoDark : NavLogoLight}
						alt="logo"
						className="transition-all duration-500 h-6 md:h-auto w-[122.53px] md:w-auto"
					/>
				</div>
				<div className="flex items-center gap-x-3">
					<Button onClick={handleClick}>Get Notified</Button>
					<button onClick={() => setIsDarkmode((prev) => !prev)}>
						{isDarkmode ? <DarkModeIcon /> : <LightModeIcon />}
					</button>
				</div>
			</div>
		);
	}
);

export default Navbar;
