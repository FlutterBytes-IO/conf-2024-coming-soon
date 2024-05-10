"use client"

import { useContext, useState } from "react";

import { DarkmodeContext } from "@/Context/DarkMode";
import Button from "./Button";

export default function GetNotifiedForm() {
    const { isDarkmode } = useContext(DarkmodeContext)
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(value)
    }

    return (
        <form className={`w-full flex transition-all duration-500 items-center rounded-[30px] border ${isDarkmode ? "border-[#1167B1]" : "border-[#D0EFFF] bg-[#E5F6FF]"}`} onSubmit={handleSubmit}>
            <input
            value={value}
            placeholder="Enter email address"
            onChange={(e) => setValue(e.target.value)}
            className={`py-4 pl-5 flex-1 pr-0 outline-none text-[#2A9DF4] placeholder:text-[#2A9DF4] placeholder:italic text-sm bg-transparent`}
            />
            <Button otherstyles="py-4 px-5">Get Notified</Button>
        </form>
    )
}