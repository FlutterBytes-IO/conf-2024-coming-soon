"use client"

import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

import LeftArrow from "./vectors/LeftArrow";
import RightArrow from "./vectors/RightArrow";

export default function MoreInfoBanner({ otherstyles, text, dark }: { otherstyles?: string; text?: string; dark?: boolean; }) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <div className={`flex items-center gap-x-2 py-2 px-3 rounded-[70px] border-2 ${otherstyles} ${isDarkmode || dark ? "bg-[#1167B1] border-[#021B38]" : "border-[#D0EFFF] bg-[#187BCD]"}`}>
        <LeftArrow dark={dark} /><span className={`${isDarkmode || dark ? "text-[#021B38]" : "text-[#D0EFFF]"}`}>{text || "For updates and enquiry"}</span><RightArrow dark={dark} />
    </div>
}