"use client"

import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

import LeftArrow from "./vectors/LeftArrow";
import RightArrow from "./vectors/RightArrow";

export default function MoreInfoBanner({ otherstyles, text, dark, withoutArrows }: { otherstyles?: string; text?: string; dark?: boolean; withoutArrows?: boolean; }) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <div className={`flex items-center gap-x-2 transition-all duration-500 ${otherstyles}`}>
        {!withoutArrows && <LeftArrow dark={dark} />}<span className={`${isDarkmode || dark ? "text-white" : "text-[#187BCD]"} transition-all duration-500 text-sm md:text-base`}>For updates & enquiry, visit<br /> our socials or send a mail...</span>{!withoutArrows && <RightArrow dark={dark} />}
    </div>
}