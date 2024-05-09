export default function Chip() {
    return <div></div>
}

export function ButtonChip({ icon, text, handleClick }: { icon: React.ReactNode; text: string; handleClick?: () => void; }) {
    return <button onClick={handleClick} className="flex items-center border border-[#D0EFFF] bg-[#F2FBFF] py-3 px-4 rounded-[50px] gap-2.5 shadow">
        {icon} <span className="text-[#187BCD] font-semibold text-sm">{text}</span>
    </button>
}