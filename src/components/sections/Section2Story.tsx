"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Wifi, Heart } from "lucide-react";

const features = [
    { icon: Coffee, title: "Artisan Coffee", description: "Dark, robust beans carefully sourced and roasted to perfection for a bold, flavorful cup every time." },
    { icon: UtensilsCrossed, title: "Hearty Meals", description: "Filling meals made with love — from our famous Grilled Corn Sandwich to signature cold Frappe." },
    { icon: Wifi, title: "Cozy Workspace", description: "A comfortable and inspiring space to work, study, or relax with great ambience and sturdy seating." },
    { icon: Heart, title: "Dedicated Team", description: "Our team is committed to delivering an outstanding dining and cafe experience, every single visit." },
];

export default function Section2Story() {
    return (
        <section id="our-story" className="py-16 lg:py-20" style={{ background: "var(--bg-section-alt)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
                    <div>
                        <span className="font-bold tracking-widest uppercase text-xs mb-3 block" style={{ color: "var(--accent)" }}>About Us</span>
                        <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-5" style={{ color: "var(--fg)" }}>
                            More Than Just<br />a Cafe.
                        </h2>
                        <p className="leading-relaxed text-lg mb-4" style={{ color: "var(--fg-muted)" }}>
                            At Fuel HQ, we've created a space for food lovers and hardworking professionals alike. From freshly crafted beverages to signature dishes, every detail is designed to fuel your day.
                        </p>
                        <p className="leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
                            Located in the heart of Nagpur, we blend the warmth of a western-style cafe with the flavors you love — a place where every visit feels like coming home.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                        <img src="https://b.zmtcdn.com/data/pictures/0/3301080/415d544aacbd0c97b236fb8080c1477e.jpg" alt="Inside Fuel HQ" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 rounded-xl px-4 py-3 shadow-lg border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                            <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--fg-subtle)" }}>Est. in Nagpur</p>
                            <p className="text-sm font-bold font-[family-name:var(--font-heading)]" style={{ color: "var(--fg)" }}>Laxmi Nagar, Nagpur</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-2xl p-6 hover:shadow-md transition-shadow border group"
                            style={{ background: "color-mix(in srgb, var(--accent) 6%, var(--bg-card))", borderColor: "var(--border)" }}
                        >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ background: "var(--accent)" }}>
                                <feature.icon className="w-5 h-5" style={{ color: "var(--accent-text)" }} />
                            </div>
                            <h3 className="text-base font-bold font-[family-name:var(--font-heading)] mb-2" style={{ color: "var(--fg)" }}>{feature.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
