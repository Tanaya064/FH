"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    { initial: "P", name: "Pritesh Damahe", role: "Local Guide", text: "Fuel Headquarters is a well-liked spot for casual hangouts, coffee, and bites. A highly rated cafe in Nagpur with a great vibe." },
    { initial: "A", name: "Ayush Vikram Singh", role: "Local Guide", text: "Nice ambience with soft background music. Loved the Kit Kat Shake, Chicken Popcorn, and Farm Fresh Pizza. Cheese Corn was amazing." },
    { initial: "K", name: "Katyayni Sharma", role: "Local Guide", text: "Try the Mac and Cheese pasta — hot and totally worth the money. Nutrela Mocha is great! Ambience is lovely, songs were nostalgic." },
];

export default function Section5Testimonials() {
    return (
        <section id="testimonials" className="py-16 lg:py-20" style={{ background: "var(--bg)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="font-bold tracking-widest uppercase text-xs mb-3 block" style={{ color: "var(--accent)" }}>Customer Reviews</span>
                    <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-3" style={{ color: "var(--fg)" }}>
                        What Our Guests Say.
                    </h2>
                    <p className="max-w-xl mx-auto" style={{ color: "var(--fg-muted)" }}>
                        Don't just take our word for it — hear from our happy customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border flex flex-col"
                            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "var(--accent)" }} />
                                ))}
                            </div>
                            <p className="italic leading-relaxed font-[family-name:var(--font-heading)] flex-grow mb-5 text-[15px]" style={{ color: "var(--fg-muted)" }}>
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-[family-name:var(--font-heading)]" style={{ background: "var(--accent)", color: "var(--accent-text)" }}>
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="font-bold text-sm font-[family-name:var(--font-heading)]" style={{ color: "var(--fg)" }}>{review.name}</p>
                                    <p className="text-xs uppercase tracking-wide font-medium" style={{ color: "var(--fg-subtle)" }}>{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
