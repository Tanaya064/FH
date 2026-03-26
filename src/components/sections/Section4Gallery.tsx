"use client";

import { motion } from "framer-motion";

const galleryItems = [
    { label: "Our Storefront", span: "col-span-2 row-span-2", image: "https://b.zmtcdn.com/data/pictures/chains/0/3301080/b7249aab5538a396bbb5ce298c3eff24.jpg" },
    { label: "Cozy Corner", span: "col-span-1 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/6f72277d82ef351ee415d5322685d02d.jpg" },
    { label: "Barista at Work", span: "col-span-1 row-span-2", image: "https://b.zmtcdn.com/data/pictures/0/3301080/545a68fdbaa0a705712a376a21572d0e.jpg" },
    { label: "Latte Art", span: "col-span-1 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/8d20eb3ec87163a9cd5b7ff84e0afb0e.jpg" },
    { label: "People Working", span: "col-span-2 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/415d544aacbd0c97b236fb8080c1477e.jpg" },
    { label: "Outdoor Seating", span: "col-span-2 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/a21f3d344289ebf1e2ea5138b8cae033.jpg" },
];

export default function Section4Gallery() {
    return (
        <section id="gallery" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">Photo Gallery</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 font-[family-name:var(--font-heading)] leading-tight">
                        Where Memories Are Made.
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className={`rounded-2xl overflow-hidden group relative ${item.span}`}
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors rounded-2xl flex items-end p-4">
                                <span className="text-white font-bold text-sm font-[family-name:var(--font-heading)] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    {item.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
