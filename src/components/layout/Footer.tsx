import { Coffee, Facebook, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                            <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center">
                                <Coffee className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold font-[family-name:var(--font-heading)] text-lg leading-none">Fuel HQ</p>
                                <p className="text-primary-400 text-[10px] font-semibold uppercase tracking-widest">Cafe & Co-working</p>
                            </div>
                        </Link>
                        <div className="space-y-3 text-sm">
                            <div className="flex gap-2.5">
                                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                                <p className="text-neutral-400 leading-relaxed">Ground Ambazari Road, Beside Pizza Hut, Laxmi Nagar, Nagpur 440010</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                                <p className="text-neutral-300 font-semibold">0712 669 0111</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Clock className="w-4 h-4 text-primary-500 shrink-0" />
                                <p className="text-neutral-400">Open Daily · Closes 11:30 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Our Story", href: "/#our-story" },
                                { label: "Menu", href: "/menu" },
                                { label: "Gallery", href: "/#gallery" },
                                { label: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Legal</h3>
                        <ul className="space-y-3">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Follow Us</h3>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Facebook className="w-4 h-4 text-neutral-300" />
                            </a>
                        </div>
                        <a
                            href="https://www.swiggy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-full transition-colors"
                        >
                            Order on Swiggy
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
                    <p className="text-neutral-500 text-sm">
                        © {currentYear} Fuel Headquarters, Nagpur. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
