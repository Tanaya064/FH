"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Anchor } from "lucide-react";
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
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ${scrolled
                ? "bg-neutral-950/90 backdrop-blur-md border-b border-primary-900 shadow-[0_5px_20px_rgba(0,0,0,0.8)] py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-3 group">
                    <Anchor className="w-8 h-8 text-primary-500 group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
                    <div className="flex flex-col">
                        <span className="text-2xl sm:text-3xl font-bold whitespace-nowrap text-primary-100 font-[family-name:var(--font-heading)] leading-none mt-1 uppercase tracking-widest text-shadow-sm">
                            Fuel Headquarters
                        </span>
                        <span className="text-xs text-primary-600 font-bold uppercase tracking-[0.2em]">फ्युएल हेडक्वार्टर</span>
                    </div>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className="hidden sm:block text-primary-100 bg-neutral-900 border border-primary-800 hover:bg-neutral-800 hover:border-accent hover:text-accent focus:ring-4 focus:outline-none focus:ring-primary-900 font-bold tracking-widest uppercase rounded-sm text-xs px-6 py-3 text-center transition-all shadow-inner">
                        Order Online
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-400 rounded-sm md:hidden hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-800"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="items-center justify-between w-full md:hidden pt-4"
                        >
                            <ul className="flex flex-col font-medium p-4 mt-4 border border-primary-900 rounded-sm bg-neutral-950 space-y-2 shadow-2xl">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block py-3 px-4 text-primary-200 uppercase tracking-widest text-sm hover:text-accent rounded-sm hover:bg-neutral-900 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 md:flex-row md:mt-0">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block py-2 px-3 text-primary-300 hover:text-accent transition-colors p-0 hover:bg-transparent tracking-widest uppercase text-xs font-bold"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
