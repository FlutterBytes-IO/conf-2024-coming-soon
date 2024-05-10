export default function Chip() {
    return <div></div>
}

export function ButtonChip({ icon, text, handleClick }: { icon: React.ReactNode; text: string; handleClick?: () => void; }) {
    return <button onClick={handleClick} className="flex items-center border border-[#D0EFFF] bg-[#F2FBFF] md:py-3 md:px-4 p-2 rounded-[50px] gap-1.5 md:gap-2.5 shadow">
        {icon} <span className="text-[#187BCD] font-semibold text-[10px] md:text-sm">{text}</span>
    </button>
}