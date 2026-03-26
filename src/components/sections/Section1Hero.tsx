"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Section1Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#fdf6e9] overflow-hidden pt-20">
            {/* Warm background texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #c47f22 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/60 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                        >
                            <MapPin className="w-3.5 h-3.5" /> Nagpur's Finest Cafe
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] font-[family-name:var(--font-heading)] mb-6"
                        >
                            Where Every<br />
                            <span className="text-primary-600">Sip Tells</span><br />
                            a Story.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg"
                        >
                            Fuel Headquarters is Nagpur's go-to spot for artisan coffee, hearty meals, and a warm atmosphere that feels like home.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 mb-10"
                        >
                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm tracking-wide rounded-full transition-colors group"
                            >
                                Explore Menu
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="https://www.swiggy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold text-sm tracking-wide rounded-full transition-colors"
                            >
                                Order on Swiggy
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-6 text-sm text-neutral-500"
                        >
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary-500" />
                                <span>Open Daily · Closes 11:30 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary-500 font-bold">⭐ 4.1</span>
                                <span>4,200+ Reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary-500">₹</span>
                                <span>200–400 per person</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Main large image */}
                            <div className="absolute top-0 left-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://b.zmtcdn.com/data/pictures/chains/0/3301080/b7249aab5538a396bbb5ce298c3eff24.jpg"
                                    alt="Cafe interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Bottom right image */}
                            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg"
                                    alt="Coffee"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Small accent image */}
                            <div className="absolute bottom-[28%] left-0 w-[38%] h-[38%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#fdf6e9]">
                                <img
                                    src="https://b.zmtcdn.com/data/dish_photos/da4/527df46f247b747fc4103fddcad55da4.jpeg"
                                    alt="Food"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute top-[58%] right-[32%] bg-white rounded-2xl shadow-xl px-4 py-3 border border-primary-100">
                                <p className="text-xs text-neutral-500 font-medium">Today's Special</p>
                                <p className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-heading)]">Sizzling Brownie</p>
                                <p className="text-primary-600 font-bold text-sm">₹230</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile: single hero image */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:hidden w-full rounded-2xl overflow-hidden shadow-xl aspect-video"
                    >
                        <img
                            src="https://b.zmtcdn.com/data/pictures/chains/0/3301080/b7249aab5538a396bbb5ce298c3eff24.jpg"
                            alt="Fuel HQ Cafe"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
