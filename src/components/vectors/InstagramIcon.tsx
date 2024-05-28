import { useDarkmode } from "@/Context/DarkMode";

export default function InstagramIcon({ dark, small }: { dark?: boolean; small?: boolean }) {
    const isDarkmode = useDarkmode();
    return <svg width={small ? "16" : "21"} height={small ? "16" : "20"} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transition: "fill 0.5s ease-in-out"}}>
    <path d="M7.00033 1.66669H14.0003C16.667 1.66669 18.8337 3.83335 18.8337 6.50002V13.5C18.8337 14.7819 18.3244 16.0113 17.418 16.9177C16.5116 17.8241 15.2822 18.3334 14.0003 18.3334H7.00033C4.33366 18.3334 2.16699 16.1667 2.16699 13.5V6.50002C2.16699 5.21814 2.67622 3.98876 3.58264 3.08234C4.48907 2.17591 5.71845 1.66669 7.00033 1.66669ZM6.83366 3.33335C6.03801 3.33335 5.27495 3.64942 4.71234 4.21203C4.14973 4.77464 3.83366 5.5377 3.83366 6.33335V13.6667C3.83366 15.325 5.17533 16.6667 6.83366 16.6667H14.167C14.9626 16.6667 15.7257 16.3506 16.2883 15.788C16.8509 15.2254 17.167 14.4623 17.167 13.6667V6.33335C17.167 4.67502 15.8253 3.33335 14.167 3.33335H6.83366ZM14.8753 4.58335C15.1516 4.58335 15.4165 4.6931 15.6119 4.88845C15.8072 5.0838 15.917 5.34875 15.917 5.62502C15.917 5.90129 15.8072 6.16624 15.6119 6.36159C15.4165 6.55694 15.1516 6.66669 14.8753 6.66669C14.5991 6.66669 14.3341 6.55694 14.1388 6.36159C13.9434 6.16624 13.8337 5.90129 13.8337 5.62502C13.8337 5.34875 13.9434 5.0838 14.1388 4.88845C14.3341 4.6931 14.5991 4.58335 14.8753 4.58335ZM10.5003 5.83335C11.6054 5.83335 12.6652 6.27234 13.4466 7.05374C14.228 7.83514 14.667 8.89495 14.667 10C14.667 11.1051 14.228 12.1649 13.4466 12.9463C12.6652 13.7277 11.6054 14.1667 10.5003 14.1667C9.39526 14.1667 8.33545 13.7277 7.55405 12.9463C6.77265 12.1649 6.33366 11.1051 6.33366 10C6.33366 8.89495 6.77265 7.83514 7.55405 7.05374C8.33545 6.27234 9.39526 5.83335 10.5003 5.83335ZM10.5003 7.50002C9.83728 7.50002 9.2014 7.76341 8.73256 8.23225C8.26372 8.70109 8.00033 9.33698 8.00033 10C8.00033 10.6631 8.26372 11.2989 8.73256 11.7678C9.2014 12.2366 9.83728 12.5 10.5003 12.5C11.1634 12.5 11.7993 12.2366 12.2681 11.7678C12.7369 11.2989 13.0003 10.6631 13.0003 10C13.0003 9.33698 12.7369 8.70109 12.2681 8.23225C11.7993 7.76341 11.1634 7.50002 10.5003 7.50002Z" fill={isDarkmode || dark ? "#D0EFFF" : "#187BCD"}/>
    </svg>
    
}