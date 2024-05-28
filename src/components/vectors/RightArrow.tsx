import { useDarkmode } from "@/Context/DarkMode";

export default function RightArrow({ dark }: { dark?: boolean }) {
	const isDarkmode = useDarkmode();
	return (
		<svg
			width="17"
			height="7"
			viewBox="0 0 17 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transition: "fill 0.5s ease-in-out" }}
		>
			<path
				d="M16.5 3.5L11.5 0.613249V6.38675L16.5 3.5ZM0.5 4H12V3H0.5V4Z"
				fill={isDarkmode || dark ? "#ffffff" : "#187BCD"}
			/>
		</svg>
	);
}
