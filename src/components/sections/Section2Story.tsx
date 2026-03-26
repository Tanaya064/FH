"use client";

import { motion } from "framer-motion";
import { Coffee, Anchor, Swords, Skull } from "lucide-react";

export default function Section2Story() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="our-story" className="py-24 relative bg-neutral-900 shadow-[inset_0_20px_50px_rgba(0,0,0,0.8)] border-b border-primary-950">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-100 mb-6 font-[family-name:var(--font-heading)] leading-tight uppercase tracking-widest">
                        More Than Just a <span className="text-accent italic drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">Cafe.</span>
                    </h2>
                    <p className="text-lg text-neutral-400 font-light leading-relaxed drop-shadow-sm">
                        At Fuel HQ, we've created a space for food lovers and hardworking professionals alike. From freshly baked treats to signature coffee, every detail is crafted to fuel your day.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="bg-neutral-950 rounded-sm p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)] shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-shadow border border-primary-900 group flex flex-col items-center text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent pointer-events-none z-0"></div>
                            <div className="h-16 w-16 rounded-full bg-neutral-900 border border-primary-800 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 group-hover:bg-primary-900 group-hover:text-primary-200 transition-all shadow-inner relative z-10">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-200 mb-3 font-[family-name:var(--font-heading)] uppercase tracking-wider relative z-10">{feature.title}</h3>
                            <p className="text-neutral-400 font-light text-sm leading-relaxed relative z-10">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const features = [
    {
        icon: Coffee,
        title: "Artisan Coffee",
        description: "Dark, robust beans carefully sourced and roasted to perfection for a bold, flavorful cup every time."
    },
    {
        icon: Anchor,
        title: "Hearty Meals",
        description: "Filling meals made with love, including our famous Grilled Corn Sandwich and signature cold Frappe."
    },
    {
        icon: Swords,
        title: "Cozy Workspace",
        description: "A comfortable and inspiring space to work, study, or relax — with great ambience and sturdy seating."
    },
    {
        icon: Skull,
        title: "Dedicated Team",
        description: "Our team is committed to delivering an outstanding dining and cafe experience, every single visit."
    }
];
