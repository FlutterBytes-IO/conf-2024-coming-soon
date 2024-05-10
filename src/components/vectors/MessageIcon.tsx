"use client"

import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

export default function MessageIcon({ dark }: { dark?: boolean; }) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transition: "fill 0.5s ease-in-out"}}>
    <path d="M17.167 3.33331H3.83366C2.91699 3.33331 2.17533 4.08331 2.17533 4.99998L2.16699 15C2.16699 15.9166 2.91699 16.6666 3.83366 16.6666H17.167C18.0837 16.6666 18.8337 15.9166 18.8337 15V4.99998C18.8337 4.08331 18.0837 3.33331 17.167 3.33331ZM16.8337 6.87498L10.942 10.5583C10.6753 10.725 10.3253 10.725 10.0587 10.5583L4.16699 6.87498C4.08343 6.82807 4.01026 6.7647 3.9519 6.68869C3.89354 6.61268 3.85121 6.52563 3.82747 6.43279C3.80373 6.33995 3.79908 6.24326 3.81379 6.14857C3.8285 6.05388 3.86227 5.96316 3.91306 5.8819C3.96385 5.80064 4.0306 5.73053 4.10926 5.67581C4.18793 5.62109 4.27688 5.58291 4.37074 5.56356C4.46459 5.54422 4.56139 5.54412 4.65529 5.56327C4.74918 5.58242 4.83821 5.62042 4.91699 5.67498L10.5003 9.16665L16.0837 5.67498C16.1624 5.62042 16.2515 5.58242 16.3454 5.56327C16.4393 5.54412 16.5361 5.54422 16.6299 5.56356C16.7238 5.58291 16.8127 5.62109 16.8914 5.67581C16.9701 5.73053 17.0368 5.80064 17.0876 5.8819C17.1384 5.96316 17.1721 6.05388 17.1869 6.14857C17.2016 6.24326 17.1969 6.33995 17.1732 6.43279C17.1494 6.52563 17.1071 6.61268 17.0487 6.68869C16.9904 6.7647 16.9172 6.82807 16.8337 6.87498Z" fill={isDarkmode || dark ? "#D0EFFF" : "#187BCD"}/>
    </svg>
}