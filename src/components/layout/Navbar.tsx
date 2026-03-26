"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${
            scrolled
                ? "bg-[#fdf6e9]/95 backdrop-blur-md shadow-md border-b border-primary-200 py-2"
                : "bg-[#fdf6e9]/80 backdrop-blur-sm py-3"
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                        <Coffee className="w-5 h-5 text-[#fdf6e9]" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold text-neutral-900 font-[family-name:var(--font-heading)] tracking-wide">
                            Fuel HQ
                        </span>
                        <span className="text-[10px] text-primary-600 font-semibold tracking-widest uppercase">Cafe & Co-working</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors tracking-wide uppercase"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.swiggy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold tracking-wide rounded-full transition-colors"
                    >
                        Order Online
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        className="md:hidden bg-[#fdf6e9] border-t border-primary-200"
                    >
                        <ul className="flex flex-col px-4 py-4 gap-1">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-3 px-4 text-sm font-semibold text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors tracking-wide uppercase"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a
                                    href="https://www.swiggy.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold tracking-wide rounded-full transition-colors"
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
