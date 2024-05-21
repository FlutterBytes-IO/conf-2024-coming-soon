interface ButtonProps {
    children: React.ReactNode;
    otherstyles?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean
}

export default function Button({ children, otherstyles, onClick, type, disabled }: ButtonProps) {
    return <button disabled={disabled} type={type || "button"} onClick={onClick} className={`rounded-[30px] btn-grad w-fit transition-all duration-500 py-2 px-2 md:px-4 gap-10 font-medium text-xs md:text-sm uppercase bg-[#2A9DF4] text-white ${otherstyles}`}>{children}</button>
}