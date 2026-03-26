"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    {
        initial: "P",
        name: "Pritesh Damahe",
        role: "Local Guide",
        text: "Fuel Headquarters is a well-liked spot for casual hangouts, coffee, and bites. A highly rated cafe in Nagpur with a great vibe."
    },
    {
        initial: "A",
        name: "Ayush Vikram Singh",
        role: "Local Guide",
        text: "Nice ambience with soft background music. Loved the Kit Kat Shake, Chicken Popcorn, and Farm Fresh Pizza. Cheese Corn was amazing."
    },
    {
        initial: "K",
        name: "Katyayni Sharma",
        role: "Local Guide",
        text: "Try the Mac and Cheese pasta — hot and totally worth the money. Nutrela Mocha is great! Ambience is lovely, songs were nostalgic."
    }
];

export default function Section5Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">Customer Reviews</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 font-[family-name:var(--font-heading)] leading-tight mb-4">
                        What Our Guests Say.
                    </h2>
                    <p className="text-neutral-600 max-w-xl mx-auto">
                        Don't just take our word for it — hear from our happy customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-primary-100 flex flex-col"
                        >
                            <div className="flex gap-1 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                                ))}
                            </div>
                            <p className="text-neutral-700 italic leading-relaxed font-[family-name:var(--font-heading)] flex-grow mb-6 text-[15px]">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-heading)]">
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-900 text-sm font-[family-name:var(--font-heading)]">{review.name}</p>
                                    <p className="text-neutral-500 text-xs uppercase tracking-wide font-medium">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
