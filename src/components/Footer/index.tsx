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
    <div className={`pt-[99px] pb-[80px] px-[101px] ${isDarkmode ? "footer-gradient" : ""}`}>
        <div 
        className="border border-[#1167B1] rounded-xl rounded-b-none border-b-0 p-7 pb-5 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col gap-y-5 flex-1">
                <Image src={isDarkmode ? FooterLogoDark : FooterLogoLight} alt="logo" />
                <div className="flex items-center gap-x-3">
                    <IconContainer icon={<TwitterIcon />} />
                    <IconContainer icon={<LinkedInIcon />} />
                    <IconContainer icon={<MessageIcon />} />
                    <IconContainer icon={<InstagramIcon />} />
                </div>
            </div>
            <div className="flex flex-col gap-y-5 flex-1">
                <p className={`text-sm ${isDarkmode ? "text-[#E0E1E2]" : "text-[#576672]"}`}>To get the latest updates about FlutterBytes Conference 2024 directly in your email inbox, subscribe below.</p>
                <GetNotifiedForm />
            </div>
        </div>
    </div>)
}