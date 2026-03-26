import { Anchor, Facebook, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 border-t-4 border-primary-900 relative overflow-hidden text-primary-200">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <Anchor className="w-8 h-8 text-primary-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] group-hover:text-accent transition-colors" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-[family-name:var(--font-heading)] text-primary-100 uppercase tracking-widest drop-shadow-sm leading-none mt-1">
                                    Fuel Headquarters
                                </span>
                                <span className="text-xs text-primary-600 font-bold uppercase tracking-[0.2em]">फ्युएल हेडक्वार्टर</span>
                            </div>
                        </Link>
                        <div className="text-neutral-400 text-sm leading-relaxed font-light space-y-2">
                            <p>Ground Ambazari Road Beside Pizza Hut Laxmi Nagar, Shadhanad Peth, Nagpur, Maharashtra 440010</p>
                            <p className="font-bold tracking-widest text-primary-400">0712 669 0111</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary-400 mb-6 font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm border-b border-primary-900 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Our Story', 'Menu', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-accent transition-colors text-sm font-bold tracking-widest uppercase">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary-400 mb-6 font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm border-b border-primary-900 pb-2 inline-block">Legal</h3>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-accent transition-colors text-sm font-bold tracking-widest uppercase">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary-400 mb-6 font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm border-b border-primary-900 pb-2 inline-block">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-accent hover:border-accent transition-colors p-3 bg-neutral-900 rounded-sm border border-primary-900 shadow-inner group">
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-accent hover:border-accent transition-colors px-4 py-3 bg-neutral-900 rounded-sm border border-primary-900 shadow-inner font-bold uppercase tracking-widest group flex items-center gap-2">
                                <Send className="w-4 h-4" /> <span className="text-xs">Order Online</span>
                            </a>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-bold text-primary-400 mb-2 text-sm uppercase tracking-widest">Opening Hours</h4>
                            <p className="text-neutral-500 font-bold tracking-widest text-xs uppercase">Open Daily · Closes at 11:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-primary-900 flex flex-col justify-center items-center gap-4 text-center">
                    <p className="text-neutral-600 text-xs font-bold tracking-widest uppercase">
                        © {currentYear} Fuel Headquarters, Nagpur. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
