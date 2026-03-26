"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Section3Menu() {
    return (
        <section id="menu" className="py-24 relative bg-neutral-950 border-t border-b border-primary-900 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="text-left max-w-2xl">
                        <span className="text-primary-400 font-semibold tracking-widest uppercase text-sm mb-4 block">
                            Featured Items
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-100 mb-6 font-[family-name:var(--font-heading)] leading-tight uppercase tracking-wide">
                            A Taste of <span className="text-primary-500 italic drop-shadow-sm">Fuel HQ.</span>
                        </h2>
                    </div>
                    <Link href="/menu" className="hidden md:flex items-center text-primary-500 font-semibold tracking-widest uppercase hover:text-primary-300 transition-colors group">
                        View Full Menu <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -5 }}
                            className="group bg-neutral-900 rounded-none overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all border border-primary-800 flex flex-col relative"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent pointer-events-none z-0"></div>
                            <div className="h-56 bg-neutral-950 relative overflow-hidden group-hover:opacity-90 transition-opacity border-b border-primary-900 z-10">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[0.3] brightness-[0.8]" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-primary-100 font-[family-name:var(--font-heading)] uppercase tracking-wider group-hover:text-primary-400 transition-colors">{item.title}</h3>
                                    <span className="text-primary-500 font-bold whitespace-nowrap">{item.price}</span>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                                    {item.desc}
                                </p>
                                <button className="w-full py-3 border border-primary-700 text-primary-400 font-bold tracking-widest hover:bg-primary-900/40 hover:text-primary-200 transition-colors mt-auto text-xs uppercase shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                    Add to Order
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Link href="/menu" className="md:hidden w-full mt-8 py-4 flex items-center justify-center text-primary-400 font-bold tracking-widest border border-primary-800 uppercase hover:bg-primary-900/50 transition-colors group shadow-md">
                    View Full Menu <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}

const menuItems = [
    { title: "Grilled Corn Sandwich", price: "Popular", desc: "Golden toasted sandwich packed with creamy corn, mixed peppers, and a perfectly seasoned filling.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/4e71fb552438717e7dc6e5ef61c1b087.jpg" },
    { title: "Cold Coffee Frappe", price: "Favorite", desc: "Rich and creamy cold coffee blended with perfection and beautifully drizzled with thick chocolate syrup.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg" },
    { title: "Refreshing Virgin Mojito", price: "₹180", desc: "A cool and zesty cooler loaded with fresh lemon slices, crushed mint leaves, and a bubbly fizz.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/2444a43366abb328c36e66127f5ff965.jpg" },
    { title: "Crispy Chilli Corn", price: "₹210", desc: "Crunchy batter-fried corn kernels tossed in aromatic spices and fresh bell peppers—a true crowd-pleaser.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/858cbce46850c7b7217464c4c040f47e.jpg" },
];
