interface ButtonProps {
    children: React.ReactNode;
    otherstyles?: string;
}

export default function Button({ children, otherstyles }: ButtonProps) {
    return <button className={`rounded-[30px] w-fit transition-all duration-500 py-2 px-2 md:px-4 gap-10 font-medium text-xs md:text-sm uppercase bg-[#2A9DF4] text-white ${otherstyles}`}>{children}</button>
}