/* eslint-disable react/display-name */
"use client"

import { useContext, forwardRef } from "react";
import Image from "next/image";
import { DarkmodeContext } from "@/Context/DarkMode";

import Button from "../Button";
import NavLogoDark from "@/assets/images/NavLogoDark.png";
import NavLogoLight from "@/assets/images/NavLogoLight.png";


const Navbar = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const { isDarkmode } = useContext(DarkmodeContext);
    return (
    <div ref={ref} className={`px-[100px] py-3 flex items-center justify-between border-b fixed w-full ${isDarkmode ? "border-[#1167B1] hero-grad-dark" : "border-[#D0EFFF] bg-white"}`}>
        <div>
            <Image src={isDarkmode ? NavLogoDark : NavLogoLight} alt="logo"  />
        </div>
        <div className="flex items-center gap-x-3">
            <Button>Get Notified</Button>
        </div>
    </div>
    )
})

export default Navbar;