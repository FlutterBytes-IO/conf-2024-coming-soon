"use client"

import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

import LeftArrow from "./vectors/LeftArrow";
import RightArrow from "./vectors/RightArrow";

export default function MoreInfoBanner({ otherstyles, text, dark, withoutArrows }: { otherstyles?: string; text?: string; dark?: boolean; withoutArrows?: boolean; }) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <div className={`flex items-center gap-x-2 py-2 px-3 rounded-[70px] border-2 transition-all duration-500 ${otherstyles} ${isDarkmode || dark ? "bg-[#1167B1] border-[#021B38]" : "border-[#D0EFFF] bg-[#187BCD]"}`}>
        {!withoutArrows && <LeftArrow dark={dark} />}<span className={`${isDarkmode ? "text-[#021B38]" : dark ? "text-white" : "text-[#D0EFFF]"} transition-all duration-500 text-sm md:text-base`}>{text || "For updates and enquiry"}</span>{!withoutArrows && <RightArrow dark={dark} />}
    </div>
}