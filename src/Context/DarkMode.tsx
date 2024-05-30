"use client";

import { createContext, useState, useEffect, useContext } from "react";

interface DarkmodeContextType {
	isDarkmode: boolean;
	setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkmodeContext = createContext<DarkmodeContextType>({
	isDarkmode: false,
	setIsDarkmode: () => {},
});

export default function DarkmodeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDarkmode, setIsDarkmode] = useState(false);

	useEffect(() => {
		const browserMode = window.matchMedia("(prefers-color-scheme: dark)");

		const handleModeChange = (e: MediaQueryListEvent) =>
			setIsDarkmode(e.matches);

		setIsDarkmode(browserMode.matches);

		browserMode.addEventListener("change", handleModeChange);

		return () => browserMode.removeEventListener("change", handleModeChange);
	}, []);

	return (
		<DarkmodeContext.Provider value={{ isDarkmode, setIsDarkmode }}>
			{children}
		</DarkmodeContext.Provider>
	);
}

export function useDarkmode() {
	const { isDarkmode } = useContext(DarkmodeContext);

	return isDarkmode;
}

export function useCheckScreenSize() {
	const [smallScreen, setSmallScreen] = useState(false);
	const [xsmallScreen, setXsmallScreen] = useState(false);

	useEffect(() => {
		const smlScreen = window.matchMedia("(max-width: 767px)").matches;
		setSmallScreen(smlScreen);
	}, []);
	useEffect(() => {
		const smlScreen = window.matchMedia("(max-width: 375px)").matches;
		setXsmallScreen(smlScreen);
	}, []);

	return {smallScreen, xsmallScreen};
}
