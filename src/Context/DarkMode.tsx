"use client"

import { createContext, useState } from "react";

interface DarkmodeContextType {
    isDarkmode: boolean;
    setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkmodeContext = createContext<DarkmodeContextType>({
    isDarkmode: false,
    setIsDarkmode: () => {}
});

export default function DarkmodeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkmode, setIsDarkmode] = useState(false);

    return (
        <DarkmodeContext.Provider value={{isDarkmode, setIsDarkmode}}>{children}</DarkmodeContext.Provider>
    )
}