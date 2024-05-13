"use client"

import { useContext, useState, useEffect } from "react";

import { DarkmodeContext } from "@/Context/DarkMode";
import Button from "./Button";

export default function GetNotifiedForm() {
    const { isDarkmode } = useContext(DarkmodeContext)
    const [value, setValue] = useState("");
    const [deviceWidth, setDeviceWidth] = useState<number>(0);

    useEffect(() => {
        setDeviceWidth(window.innerWidth)
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(value)
    }

    return (
        <form className={`flex ${deviceWidth < 321 ? "flex-col gap-y-3 bg-transparent border-none" : ""} transition-all duration-500 items-center rounded-[30px] border ${isDarkmode ? "border-[#1167B1]" : "border-[#D0EFFF] bg-[#E5F6FF]"}`} onSubmit={handleSubmit}>
            <input
            value={value}
            placeholder="Enter email address"
            onChange={(e) => setValue(e.target.value)}
            className={`md:py-4 py-[13.5px] pl-5 flex-1 pr-0 outline-none text-[#2A9DF4] placeholder:text-[#2A9DF4] placeholder:italic text-xs md:text-sm bg-transparent ${isDarkmode && deviceWidth < 321 ? "border text-center border-[#1167B1] w-full !pl-0 !rounded-[30px]" : "!bg-[#E5F6FF] text-center w-full !pl-0 !rounded-[30px]"}`}
            />
            <Button otherstyles={`py-4 px-5 ${deviceWidth < 321 && isDarkmode ? "w-full !bg-[#D0EFFF] !text-[#1167B1]" : "!bg-[#2A9DF4] w-full !text-white"}`}>Get Notified</Button>
        </form>
    )
}