"use client"

import { useContext, useState, useEffect } from "react";

import { DarkmodeContext } from "@/Context/DarkMode";
import Button from "./Button";

export default function GetNotifiedForm() {
    const { isDarkmode } = useContext(DarkmodeContext)
    const [value, setValue] = useState("");
    const [deviceWidth, setDeviceWidth] = useState<number>(0);

    useEffect(() => {
        setDeviceWidth(window.screen.width)
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(value)
    }

    return (
        <form className={`flex flex-col gap-y-3 bg-transparent md:flex-row md:gap-y-0 transition-all duration-500 items-center rounded-[30px] md:!border ${isDarkmode ? "md:!border-[#1167B1]" : "md:!border-[#D0EFFF] md:!bg-[#E5F6FF]"}`} onSubmit={handleSubmit}>
            <input
            value={value}
            placeholder="Enter email address"
            onChange={(e) => setValue(e.target.value)}
            className={`md:py-4 md:text-start py-[13.5px] md:w-full md:pl-5 flex-1 pr-0 outline-none text-[#2A9DF4] placeholder:text-[#2A9DF4] placeholder:italic text-xs md:text-sm bg-transparent ${isDarkmode ? "border border-[#1167B1] md:border-none w-full !pl-4 !rounded-[30px] md:rounded-none" : "!bg-[#E5F6FF] text-center w-full !pl-0 md:!pl-5 !rounded-[30px]"}`}
            />
            <Button otherstyles={`py-4 px-5 ${isDarkmode ? "w-full md:w-auto !bg-[#D0EFFF] !text-[#1167B1]" : "!bg-[#2A9DF4] w-full md:w-auto !text-white"}`}>Get Notified</Button>
        </form>
    )
}