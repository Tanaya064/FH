"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/contact" },
];

function GlassLogo({ filled }: { filled: boolean }) {
    return (
        <div className="relative w-8 h-10 shrink-0">
            <svg viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    <clipPath id="gc">
                        <path d="M3 2 L29 2 L25 38 L7 38 Z" />
                    </clipPath>
                </defs>

                {/* Liquid fill */}
                {filled && (
                    <motion.rect
                        x="3" y="2" width="26" height="36"
                        fill="var(--accent)"
                        opacity="0.22"
                        clipPath="url(#gc)"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
                        style={{ transformOrigin: "50% 100%" }}
                    />
                )}

                {/* Liquid surface */}
                {filled && (
                    <motion.ellipse
                        cx="16" cy="15" rx="10" ry="2.5"
                        fill="var(--accent)"
                        opacity="0.4"
                        clipPath="url(#gc)"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.35, delay: 0.25 }}
                    />
                )}

                {/* Glass outline */}
                <path d="M3 2 L29 2 L25 38 L7 38 Z" stroke="var(--accent)" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
                <line x1="2" y1="2" x2="30" y2="2" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="6" y1="38" x2="26" y2="38" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />

                {/* Shine */}
                <path d="M8 6 L9.5 26" stroke="var(--accent)" strokeWidth="0.9" strokeLinecap="round" opacity={filled ? "0.45" : "0.2"} />

                {/* Bubbles */}
                {filled && (
                    <>
                        <motion.circle cx="14" cy="28" r="1.1" fill="var(--accent)" opacity="0.55"
                            animate={{ cy: [28, 12], opacity: [0.55, 0] }}
                            transition={{ duration: 1.1, repeat: Infinity, delay: 0 }} />
                        <motion.circle cx="19" cy="32" r="0.8" fill="var(--accent)" opacity="0.4"
                            animate={{ cy: [32, 16], opacity: [0.4, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, delay: 0.5 }} />
                    </>
                )}
            </svg>
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggle } = useTheme();
    const isDark = theme === "dark";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed w-full z-50 top-0 backdrop-blur-md transition-all duration-300"
            style={{
                background: "var(--bg-nav)",
                borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
                boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <GlassLogo filled={isDark} />
                    <div className="flex flex-col leading-none gap-0.5">
                        <span
                            className="text-xl font-bold font-[family-name:var(--font-heading)] leading-none tracking-tight"
                            style={{ color: "var(--fg)" }}
                        >
                            Fuel
                        </span>
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.18em] leading-none"
                            style={{ color: "var(--accent)" }}
                        >
                            Headquarters
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-[11px] font-bold uppercase tracking-widest transition-colors hover:opacity-100"
                                style={{ color: "var(--fg-muted)" }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right controls */}
                <div className="flex items-center gap-2 shrink-0">
                    {/* Theme toggle */}
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                        style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            color: "var(--accent)",
                        }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={isDark ? "sun" : "moon"}
                                initial={{ rotate: -80, opacity: 0, scale: 0.6 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 80, opacity: 0, scale: 0.6 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center justify-center"
                            >
                                {isDark
                                    ? <Sun className="w-3.5 h-3.5" />
                                    : <Moon className="w-3.5 h-3.5" />
                                }
                            </motion.span>
                        </AnimatePresence>
                    </button>

                    <a
                        href="https://www.swiggy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block px-4 py-1.5 text-[11px] font-bold tracking-wide rounded-full transition-colors"
                        style={{ background: "var(--accent)", color: "var(--accent-text)" }}
                    >
                        Order Online
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-1.5 rounded-lg"
                        style={{ color: "var(--fg-muted)" }}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                        style={{ background: "var(--bg-nav)", borderTop: "1px solid var(--border)" }}
                    >
                        <ul className="flex flex-col px-4 py-3 gap-0.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2.5 px-3 text-[11px] font-bold uppercase tracking-widest rounded-lg"
                                        style={{ color: "var(--fg-muted)" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2 pb-1">
                                <a
                                    href="https://www.swiggy.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-2.5 text-[11px] font-bold tracking-wide rounded-full"
                                    style={{ background: "var(--accent)", color: "var(--accent-text)" }}
                                >
                                    Order Online
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
