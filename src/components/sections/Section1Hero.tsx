"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Section1Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden pt-14"
            style={{ background: "var(--bg)" }}
        >
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
                style={{ background: "linear-gradient(to left, color-mix(in srgb, var(--accent) 8%, transparent), transparent)" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                            style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}
                        >
                            <MapPin className="w-3.5 h-3.5" /> Nagpur's Finest Cafe
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] font-[family-name:var(--font-heading)] mb-5"
                            style={{ color: "var(--fg)" }}
                        >
                            Where Every<br />
                            <span style={{ color: "var(--accent)" }}>Sip Tells</span><br />
                            a Story.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg mb-7 leading-relaxed max-w-lg"
                            style={{ color: "var(--fg-muted)" }}
                        >
                            Fuel Headquarters is Nagpur's go-to spot for artisan coffee, hearty meals, and a warm atmosphere that feels like home.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 mb-8"
                        >
                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3 font-bold text-sm tracking-wide rounded-full transition-colors group"
                                style={{ background: "var(--accent)", color: "var(--accent-text)" }}
                            >
                                Explore Menu
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="https://www.swiggy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-7 py-3 border-2 font-bold text-sm tracking-wide rounded-full transition-colors"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                            >
                                Order on Swiggy
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-5 text-sm"
                            style={{ color: "var(--fg-subtle)" }}
                        >
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" style={{ color: "var(--accent)" }} />
                                <span>Open Daily · Closes 11:30 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span style={{ color: "var(--accent)" }} className="font-bold">⭐ 4.1</span>
                                <span>4,200+ Reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span style={{ color: "var(--accent)" }}>₹</span>
                                <span>200–400 per person</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image collage — desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute top-0 left-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://b.zmtcdn.com/data/pictures/chains/0/3301080/b7249aab5538a396bbb5ce298c3eff24.jpg" alt="Cafe interior" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg" alt="Coffee" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-[28%] left-0 w-[38%] h-[38%] rounded-2xl overflow-hidden shadow-xl border-4" style={{ borderColor: "var(--bg)" }}>
                                <img src="https://b.zmtcdn.com/data/dish_photos/da4/527df46f247b747fc4103fddcad55da4.jpeg" alt="Food" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-[58%] right-[32%] rounded-2xl shadow-xl px-4 py-3 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                                <p className="text-xs font-medium" style={{ color: "var(--fg-subtle)" }}>Today's Special</p>
                                <p className="text-sm font-bold font-[family-name:var(--font-heading)]" style={{ color: "var(--fg)" }}>Sizzling Brownie</p>
                                <p className="font-bold text-sm" style={{ color: "var(--accent)" }}>₹230</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile hero image */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:hidden w-full rounded-2xl overflow-hidden shadow-xl aspect-video"
                    >
                        <img src="https://b.zmtcdn.com/data/pictures/chains/0/3301080/b7249aab5538a396bbb5ce298c3eff24.jpg" alt="Fuel HQ Cafe" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
