"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Section5Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative bg-neutral-950 border-t border-primary-900 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Customer Reviews
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-100 mb-6 font-[family-name:var(--font-heading)] leading-tight uppercase tracking-widest">
                        What Our Customers <span className="text-accent italic drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">Say.</span>
                    </h2>
                    <p className="text-lg text-neutral-400 font-light drop-shadow-sm">
                        Don't just take our word for it — hear what our happy customers have to say about their experience at Fuel HQ.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-neutral-900 rounded-sm p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)] shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all border border-primary-800 group relative flex flex-col"
                        >
                            <div className="flex text-primary-500 mb-6 drop-shadow-[0_0_8px_rgba(255,215,0,0.2)]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-primary-200 italic mb-8 leading-relaxed font-[family-name:var(--font-heading)] flex-grow drop-shadow-sm">
                                "{review.text}"
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-sm bg-neutral-950 border border-primary-800 flex items-center justify-center text-accent font-bold text-lg font-[family-name:var(--font-heading)] shadow-inner">
                                    {review.initial}
                                </div>
                                <div>
                                    <h4 className="text-primary-100 font-bold font-[family-name:var(--font-heading)] tracking-wider">{review.name}</h4>
                                    <div className="text-primary-400/70 font-bold text-xs uppercase tracking-widest">{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const reviews = [
    {
        initial: "P",
        name: "Pritesh Damahe",
        role: "Local Guide",
        text: "Here's a highly rated review summary of one of Nagpur's popular cafes: Fuel Headquarters - A well-liked spot for casual hangouts, coffee, and bites."
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
        text: "Recommendation: Try Mac and cheese pasta like hot and yum yum worth the money. Nutrela Mocha is good! Ambience is good...Songs were nostalgic."
    }
];
