import { useDarkmode } from "@/Context/DarkMode";

export default function TwitterIcon({
	dark,
	small,
}: {
	dark?: boolean;
	small?: boolean;
}) {
	const isDarkmode = useDarkmode();
	return (
		<svg
			width={small ? "16" : "21"}
			height={small ? "16" : "20"}
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transition: "fill 0.5s ease-in-out" }}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M18.4883 17.8125L12.2404 8.70596L12.2511 8.71449L17.8845 2.1875H16.0019L11.4129 7.5L7.76855 2.1875H2.83139L8.66436 10.6896L8.66365 10.6889L2.51172 17.8125H4.39424L9.49623 11.902L13.5511 17.8125H18.4883ZM7.02266 3.60795L15.7888 16.3921H14.297L5.52377 3.60795H7.02266Z"
				fill={isDarkmode || dark ? "#D0EFFF" : "#187BCD"}
			/>
		</svg>
	);
}
