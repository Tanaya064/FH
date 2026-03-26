"use client";

import { motion } from "framer-motion";

export default function Section4Gallery() {
    return (
        <section id="gallery" className="py-24 relative bg-neutral-900 overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.8)] border-t border-b border-primary-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                    Photo Gallery
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-100 mb-12 font-[family-name:var(--font-heading)] leading-tight uppercase tracking-widest">
                    Where <span className="text-accent italic drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">Memories</span> Are Made.
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`rounded-sm bg-neutral-950 shadow-[0_15px_30px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center border-4 border-primary-800/80 group relative ${item.span}`}
                        >
                            <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 sepia-[0.4] brightness-75" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <span className="text-primary-100 font-[family-name:var(--font-heading)] font-bold text-2xl tracking-widest uppercase border-y border-primary-500/50 py-2">
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

const galleryItems = [
    { label: "Our Storefront", span: "col-span-2 row-span-2", image: "https://b.zmtcdn.com/data/pictures/chains/0/3301080/b7249aab5538a396bbb5ce298c3eff24.jpg" },
    { label: "Cozy Corner", span: "col-span-1 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/6f72277d82ef351ee415d5322685d02d.jpg" },
    { label: "Barista at Work", span: "col-span-1 row-span-2 text-vertical", image: "https://b.zmtcdn.com/data/pictures/0/3301080/545a68fdbaa0a705712a376a21572d0e.jpg" },
    { label: "Latte Art", span: "col-span-1 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/8d20eb3ec87163a9cd5b7ff84e0afb0e.jpg" },
    { label: "People Working", span: "col-span-2 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/415d544aacbd0c97b236fb8080c1477e.jpg" },
    { label: "Outdoor Seating", span: "col-span-2 row-span-1", image: "https://b.zmtcdn.com/data/pictures/0/3301080/a21f3d344289ebf1e2ea5138b8cae033.jpg" },
];
