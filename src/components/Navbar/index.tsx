/* eslint-disable react/display-name */
"use client"

import { useContext, forwardRef } from "react";
import Image from "next/image";
import { DarkmodeContext } from "@/Context/DarkMode";

import Button from "../Button";
import NavLogoDark from "@/assets/images/NavLogoDark.png";
import NavLogoLight from "@/assets/images/NavLogoLight.png";
import DarkModeIcon, { LightModeIcon } from "../vectors/ModeIcon";


const Navbar = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);
    return (
    <div ref={ref} className={`px-[100px] transition-all duration-500 py-3 flex items-center justify-between border-b fixed w-full ${isDarkmode ? "border-[#1167B1] hero-grad-dark" : "border-[#D0EFFF] bg-white"}`}>
        <div>
            <Image src={isDarkmode ? NavLogoDark : NavLogoLight} alt="logo" className="transition-all duration-500"  />
        </div>
        <div className="flex items-center gap-x-3">
            <Button>Get Notified</Button>
            <button onClick={() => setIsDarkmode(prev => !prev)}>
                {isDarkmode ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
        </div>
    </div>
    )
})

export default Navbar;