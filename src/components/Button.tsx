import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

interface ButtonProps {
    children: React.ReactNode;
    otherstyles?: string;
}

export default function Button({ children, otherstyles }: ButtonProps) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <button className={`rounded-[30px] transition-all duration-500 py-2 px-4 gap-10 font-medium text-sm uppercase ${isDarkmode ? "bg-[#2A9DF4] text-white" : "bg-[#D0EFFF] text-[#187BCD]"} ${otherstyles}`}>{children}</button>
}