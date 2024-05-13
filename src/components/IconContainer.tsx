"use client"

import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

export default function IconContainer({ icon, dark, otherstyles, href }: {
    icon: React.ReactNode;
    dark?: boolean;
    otherstyles?: string;
    href?: string;
}) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <a href={href} target="_blank"><div className={`rounded-[50px] ${otherstyles} transition-all duration-500 flex items-center justify-center py-5 px-3 border ${isDarkmode || dark ? "border-[#072A47] bg-[#021B38]" : "border-[#E5F6FF] bg-[#F2FBFF]"}`}>{icon}</div></a>
}