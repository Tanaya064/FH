"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
    theme: "dark",
    toggle: () => {},
});

export function useTheme() {
    return useContext(ThemeContext);
}

function applyTheme(t: Theme) {
    const html = document.documentElement;
    if (t === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
    localStorage.setItem("fhq-theme", t);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const stored = localStorage.getItem("fhq-theme") as Theme | null;
        const resolved: Theme = stored === "light" ? "light" : "dark";
        setTheme(resolved);
        applyTheme(resolved);
    }, []);

    const toggle = useCallback(() => {
        setTheme(prev => {
            const next: Theme = prev === "dark" ? "light" : "dark";
            applyTheme(next);
            return next;
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
