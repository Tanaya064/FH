"use client";

import { Coffee, Facebook, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: "var(--bg-section-alt)", borderTop: "1px solid var(--border)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--accent)" }}>
                                <Coffee className="w-5 h-5" style={{ color: "var(--accent-text)" }} />
                            </div>
                            <div>
                                <p className="font-bold font-[family-name:var(--font-heading)] text-lg leading-none" style={{ color: "var(--fg)" }}>Fuel HQ</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Cafe & Co-working</p>
                            </div>
                        </Link>
                        <div className="space-y-3 text-sm">
                            <div className="flex gap-2.5">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                                <p className="leading-relaxed" style={{ color: "var(--fg-muted)" }}>Ground Ambazari Road, Beside Pizza Hut, Laxmi Nagar, Nagpur 440010</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--accent)" }} />
                                <p className="font-semibold" style={{ color: "var(--fg)" }}>0712 669 0111</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Clock className="w-4 h-4 shrink-0" style={{ color: "var(--accent)" }} />
                                <p style={{ color: "var(--fg-muted)" }}>Open Daily · Closes 11:30 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "var(--fg)" }}>Quick Links</h3>
                        <ul className="space-y-3">
                            {[{ label: "Home", href: "/" }, { label: "Our Story", href: "/#our-story" }, { label: "Menu", href: "/menu" }, { label: "Gallery", href: "/#gallery" }, { label: "Contact", href: "/contact" }].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm transition-colors" style={{ color: "var(--fg-muted)" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
                                    >{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "var(--fg)" }}>Legal</h3>
                        <ul className="space-y-3">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm transition-colors" style={{ color: "var(--fg-muted)" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
                                    >{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "var(--fg)" }}>Follow Us</h3>
                        <div className="flex gap-3 mb-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors border"
                                style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--fg-muted)" }}
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                        <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer"
                            className="inline-block px-5 py-2 text-xs font-bold rounded-full transition-colors"
                            style={{ background: "var(--accent)", color: "var(--accent-text)" }}
                        >
                            Order on Swiggy
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-7 border-t text-center" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm" style={{ color: "var(--fg-subtle)" }}>
                        © {currentYear} Fuel Headquarters, Nagpur. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
