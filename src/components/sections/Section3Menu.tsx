"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
    { title: "Grilled Corn Sandwich", tag: "Popular", desc: "Golden toasted sandwich packed with creamy corn, mixed peppers, and a perfectly seasoned filling.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/4e71fb552438717e7dc6e5ef61c1b087.jpg" },
    { title: "Cold Coffee Frappe", tag: "Favorite", desc: "Rich and creamy cold coffee blended to perfection, drizzled with thick chocolate syrup.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg" },
    { title: "Virgin Mojito", tag: "₹180", desc: "A cool and zesty cooler loaded with fresh lemon slices, crushed mint leaves, and a bubbly fizz.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/2444a43366abb328c36e66127f5ff965.jpg" },
    { title: "Crispy Chilli Corn", tag: "₹210", desc: "Crunchy batter-fried corn kernels tossed in aromatic spices and fresh bell peppers.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/858cbce46850c7b7217464c4c040f47e.jpg" },
];

export default function Section3Menu() {
    return (
        <section id="menu" className="py-20 lg:py-28 bg-[#fdf6e9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">Featured Items</span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 font-[family-name:var(--font-heading)] leading-tight">
                            A Taste of Fuel HQ.
                        </h2>
                    </div>
                    <Link
                        href="/menu"
                        className="hidden sm:inline-flex items-center gap-2 text-primary-600 font-bold text-sm tracking-wide hover:text-primary-700 transition-colors group"
                    >
                        View Full Menu
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: idx * 0.08 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-primary-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {item.tag}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-neutral-900 font-[family-name:var(--font-heading)] text-lg mb-1.5 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 sm:hidden">
                    <Link
                        href="/menu"
                        className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-primary-600 text-primary-700 font-bold text-sm tracking-wide rounded-full hover:bg-primary-50 transition-colors group"
                    >
                        View Full Menu
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
