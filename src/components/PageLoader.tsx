"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
    const pathname = usePathname();
    const prevPath = useRef<string | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // skip on first mount
        if (prevPath.current === null) {
            prevPath.current = pathname;
            return;
        }
        if (prevPath.current === pathname) return;
        prevPath.current = pathname;

        setVisible(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setVisible(false), 700);
        return () => { if (timer.current) clearTimeout(timer.current); };
    }, [pathname]);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
            style={{ background: "var(--bg)", opacity: 0.97 }}
        >
            {/* Fork & Spoon swinging toward each other */}
            <div className="flex items-end justify-center gap-3 h-20">
                {/* Fork — swings from left */}
                <svg
                    viewBox="0 0 20 56"
                    className="w-7 h-16 animate-fork"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* 3 tines */}
                    <line x1="4"  y1="2" x2="4"  y2="16" />
                    <line x1="10" y1="2" x2="10" y2="16" />
                    <line x1="16" y1="2" x2="16" y2="16" />
                    {/* neck curves to center */}
                    <path d="M4 16 Q10 24 10 30" />
                    <path d="M16 16 Q10 24 10 30" />
                    {/* handle */}
                    <line x1="10" y1="30" x2="10" y2="54" />
                </svg>

                {/* Spoon — swings from right */}
                <svg
                    viewBox="0 0 20 56"
                    className="w-7 h-16 animate-spoon"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                >
                    {/* bowl */}
                    <ellipse cx="10" cy="9" rx="7" ry="8" />
                    {/* handle */}
                    <line x1="10" y1="17" x2="10" y2="54" />
                </svg>
            </div>

            <p
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: "var(--fg-muted)", fontFamily: "var(--font-heading)" }}
            >
                Loading…
            </p>
        </div>
    );
}
