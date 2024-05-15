"use client"

import { useContext, useState, useEffect } from "react";

import { DarkmodeContext } from "@/Context/DarkMode";
import Button from "./Button";
import TickIcon from "./vectors/TickIcon"

export default function GetNotifiedForm({ closeModal }: { closeModal?: () => void;}) {
    const { isDarkmode } = useContext(DarkmodeContext)
    const [value, setValue] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState<number>(0);

    useEffect(() => {
        setDeviceWidth(window.screen.width)
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitted(false)
        try {
            const res = await fetch("https://geekapi.pythonanywhere.com/api/email/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: value })
            });
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }
            const data = await res.json();
            console.log(data);
            setIsSubmitted(true)
            setValue("")
            if (closeModal) closeModal();
        } catch (err) {
            console.log(err);
        } finally {
            setIsSubmitted(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-y-3 bg-transparent md:flex-row md:gap-y-0 transition-all duration-500 items-center rounded-[30px] md:!border ${isDarkmode ? "md:!border-[#1167B1]" : "md:!border-[#D0EFFF] md:hover:!border md:hover:!border-[#1167B1] md:!bg-[#E5F6FF]"}`}>
            <input
            value={value}
            placeholder="Enter email address"
            onChange={(e) => setValue(e.target.value)}
            className={`md:py-4 md:text-start py-[13.5px] outline-[#1167B1] md:w-full md:pl-5 flex-1 pr-0 md:outline-none text-[#2A9DF4] placeholder:text-[#2A9DF4] placeholder:italic text-xs md:text-sm bg-transparent ${isDarkmode ? "border border-[#1167B1] md:border-none w-full !pl-4 !rounded-[30px] md:rounded-none" : "!bg-[#E5F6FF] text-center w-full !pl-0 md:!pl-5 !rounded-[30px]"}`}
            />
            <Button type="submit" otherstyles={`py-4 px-5 flex items-center gap-x-1 !bg-[#2A9DF4] !text-white`}>{isSubmitted ? <>Email Added <TickIcon /></> : "Get Notified"}</Button>
        </form>
    )
}