"use client"

import Image from "next/image";
import { useContext } from "react";

import { DarkmodeContext } from "@/Context/DarkMode";
import GetNotifiedForm from "../GetNotifiedForm";
import FooterLogoDark from "@/assets/images/FooterLogoDark.png";
import FooterLogoLight from "@/assets/images/FooterLogoLight.png";
import IconContainer from "../IconContainer";
import TwitterIcon from "../vectors/TwitterIcon";
import LinkedInIcon from "../vectors/LinkedInIcon";
import MessageIcon from "../vectors/MessageIcon";
import InstagramIcon from "../vectors/InstagramIcon";

export default function Footer() {
    const { isDarkmode } = useContext(DarkmodeContext);
    return (
    <div className={`pt-[99px] transition-all duration-500 pb-[35px] md:pb-[80px] px-5 md:px-[101px] ${isDarkmode ? "footer-gradient" : ""}`}>
        <div 
        className="border border-[#1167B1] rounded-xl rounded-b-none border-b-0 pt-7 p-5 flex flex-col gap-y-[70px] md:gap-y-0 md:flex-row md:items-center justify-between">
            <div className="flex flex-col gap-y-5 md:flex-1 items-center md:items-start">
                <Image src={isDarkmode ? FooterLogoDark : FooterLogoLight} alt="logo" className="transition-all duration-500 w-[204.21px] md:w-auto h-10 md:h-auto" />
                <div className="flex items-center gap-x-3">
                    <IconContainer otherstyles="py-4 px-[9.6px]" icon={<TwitterIcon />} />
                    <IconContainer otherstyles="py-4 px-[9.6px]" icon={<LinkedInIcon />} />
                    <IconContainer otherstyles="py-4 px-[9.6px]" icon={<MessageIcon />} />
                    <IconContainer otherstyles="py-4 px-[9.6px]" icon={<InstagramIcon />} />
                </div>
            </div>
            <div className="flex flex-col gap-y-5 md:flex-1">
                <p className={`text-xs text-center md:text-start md:text-sm transition-all duration-500 ${isDarkmode ? "text-[#E0E1E2]" : "text-[#576672]"}`}>To get the latest updates about FlutterBytes Conference 2024 directly in your email inbox, subscribe below.</p>
                <GetNotifiedForm />
            </div>
        </div>
    </div>)
}