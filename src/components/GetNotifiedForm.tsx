"use client"

import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify"

import { DarkmodeContext } from "@/Context/DarkMode";
import Button from "./Button";
import TickIcon from "./vectors/TickIcon"

export default function GetNotifiedForm({ closeModal }: { closeModal?: () => void; }) {
    const { isDarkmode } = useContext(DarkmodeContext)
    const [value, setValue] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setDeviceWidth(window.screen.width)
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitted(false)
        setIsLoading(true)
        try {
            const res = await fetch("https://geekapi.pythonanywhere.com/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: value })
            });
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }
            await res.json();
            toast.success("Hooray! Your email was added successfully!")
            setIsSubmitted(true)
            setValue("")
        } catch (err) {
            toast.error("Error!")
        } finally {
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000)
            setIsLoading(false)
            if (closeModal) closeModal();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex bg-transparent transition-all duration-500 items-center rounded-[30px] !border ${isDarkmode ? "!border-[#1167B1]" : "!border-[#D0EFFF] md:hover:!border md:hover:!border-[#1167B1] !bg-[#E5F6FF]"}`}>
            <input
                value={value}
                placeholder="Enter email address"
                onChange={(e) => setValue(e.target.value)}
                className={`py-[13.5px] pl-4 outline-none bg-transparent flex-1 pr-0 md:outline-none text-[#2A9DF4] placeholder:text-[#2A9DF4] placeholder:italic text-xs md:text-sm`}
            />
            <Button disabled={isLoading} type="submit" otherstyles={`py-4 min-[321px]:px-5 flex items-center justify-center text-center gap-x-1`}>{isSubmitted ? <>Email Added <TickIcon /></> : "Get Notified"}</Button>
        </form>
    )
}