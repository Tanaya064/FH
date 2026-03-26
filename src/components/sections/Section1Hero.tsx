"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";

export default function Section1Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
            {/* Background Decorative Graphic - Dark Sea Map / Dragon Scale vibe */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary-400">
                    <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.3C91.1,-33.5,97.3,-18,97.1,-2.7C96.9,12.6,90.3,27.7,80.7,40.6C71.1,53.5,58.6,64.2,44.5,72C30.4,79.8,15.2,84.7,0.3,84.1C-14.6,83.5,-29.2,77.5,-42.6,69.5C-56,61.4,-68.2,51.3,-77.1,38.6C-86,25.9,-91.6,10.7,-91.5,-4.4C-91.4,-19.6,-85.7,-34.5,-75.7,-46.5C-65.7,-58.5,-51.5,-67.7,-37.6,-74.8C-23.7,-81.9,-10,-86.9,2.4,-90.7C14.8,-94.5,29.6,-97,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center mb-4"
                    >
                        <span className="text-primary-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                            <Coffee className="w-4 h-4" /> Nagpur's Finest Cafe
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-primary-100 mb-6 leading-tight font-[family-name:var(--font-heading)] uppercase tracking-tight drop-shadow-md"
                    >
                        Sip, Feast & <br /><span className="text-accent italic drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">Conquer.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-light drop-shadow-sm"
                    >
                        Fuel Headquarters is your go-to cafe for great food, artisan coffee, and an atmosphere that fuels creativity. <br />
                        <span className="font-medium text-primary-400 mt-2 block">₹200–400 per person • Dine-in • Takeaway • Delivery till 11:30 PM</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-start gap-4"
                    >
                        <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent hover:bg-neutral-950 border border-accent text-white rounded-none font-medium text-lg uppercase tracking-wider transition-colors flex items-center justify-center group shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)]">
                            Order on Swiggy
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="px-8 py-4 bg-transparent hover:bg-primary-900 border border-primary-500 text-primary-200 rounded-none font-medium text-lg uppercase tracking-wider transition-colors flex items-center justify-center">
                            Reserve a Table
                        </button>
                    </motion.div>
                </div>

                {/* Unique Hero Visual: The "Fuel Dashboard" Collage */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center mt-12 md:mt-0 perspective-[1000px]"
                >
                    {/* Dark ambient engine glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 m-auto w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] rounded-full border-[1.5px] border-primary-500/20 border-dashed -z-10"
                    />
                    
                    {/* Inner Rotating Ring */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 m-auto w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border border-accent/30 -z-10 border-t-accent/80 border-b-accent/80"
                    />

                    {/* 3D Tilted Main Card - The "Fuel Tank" */}
                    <motion.div 
                        animate={{ 
                            rotateY: [0, 8, -8, 0],
                            rotateX: [0, 4, -4, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative w-64 h-[22rem] lg:w-80 lg:h-[28rem] rounded-sm border-[3px] border-primary-900 bg-neutral-950 p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-20 group"
                    >
                        {/* Functional Data Dashboard inside card instead of Image */}
                        <div className="w-full h-full relative overflow-hidden rounded-sm bg-neutral-950 flex flex-col justify-between border border-primary-900/50">
                            {/* Upper Diagnostics Section */}
                            <div className="p-4 lg:p-5 flex-grow relative z-10">
                                {/* Animated Background Gradients */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-[60px] rounded-full animate-pulse flex-none pointer-events-none"></div>
                                
                                <h4 className="text-primary-500 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 pb-3 border-b border-primary-800/60 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                                    <svg className="w-3 h-3 text-accent animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    System Diagnostics
                                </h4>

                                <div className="space-y-4 lg:space-y-5 font-mono text-[10px] lg:text-xs">
                                    <div className="flex justify-between items-center group cursor-default">
                                       <span className="text-primary-300 group-hover:text-primary-100 transition-colors uppercase tracking-wider">Extraction</span>
                                       <span className="text-accent font-bold drop-shadow-[0_0_5px_rgba(139,0,0,0.8)]">OPTIMAL</span>
                                    </div>
                                    <div className="w-full bg-neutral-900 h-1 mt-1 rounded-full overflow-hidden">
                                         <div className="bg-accent h-full w-[95%] shadow-[0_0_10px_rgba(139,0,0,1)]"></div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center mt-4 group cursor-default">
                                       <span className="text-primary-300 group-hover:text-primary-100 transition-colors uppercase tracking-wider">Pressure</span>
                                       <span className="text-primary-400">9 BAR</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center mt-4 group cursor-default">
                                       <span className="text-primary-300 group-hover:text-primary-100 transition-colors uppercase tracking-wider">Network</span>
                                       <span className="text-green-500 animate-pulse font-bold">ONLINE</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Inner Glass Overlay with industrial scanning lines line-style */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 z-20"></div>
                            
                            {/* Live Status Bottom Section */}
                            <div className="bg-neutral-950/90 backdrop-blur-md flex flex-col p-4 lg:p-5 border-t-2 border-primary-900/80 transition-all duration-500 relative z-30">
                                <div className="space-y-3 transform-gpu">
                                    <div className="flex items-center justify-between border-b border-primary-800/50 pb-2">
                                        <p className="text-accent font-bold tracking-widest text-[10px] lg:text-xs uppercase flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(139,0,0,1)]"></span> Live Status
                                        </p>
                                        <p className="text-primary-400 font-bold tracking-widest text-[9px] lg:text-[10px] uppercase">
                                            Open till 11:30 PM
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-neutral-900 p-2 rounded-sm border border-primary-800/30">
                                            <p className="text-[8px] lg:text-[9px] text-primary-500 uppercase tracking-widest mb-1">Current Brew</p>
                                            <p className="text-xs lg:text-sm font-bold text-primary-100 uppercase truncate">Dark Roast</p>
                                        </div>
                                        <div className="bg-neutral-900 p-2 rounded-sm border border-primary-800/30">
                                            <p className="text-[8px] lg:text-[9px] text-primary-500 uppercase tracking-widest mb-1">Energy Vibe</p>
                                            <p className="text-xs lg:text-sm font-bold text-accent uppercase truncate">High Octane</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Fuel Gauge Element attached to card */}
                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-[60%] bg-neutral-950 rounded-full border border-primary-700 overflow-hidden flex flex-col justify-end shadow-lg drop-shadow-[0_0_15px_rgba(0,0,0,1)]">
                            <motion.div 
                                initial={{ height: "0%" }}
                                animate={{ height: ["10%", "100%", "70%", "95%"] }}
                                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                className="w-full bg-gradient-to-t from-primary-600 via-accent to-red-500 shadow-[0_0_15px_rgba(139,0,0,1)] relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Floating Element 1 - Fast Food Hit (Fuel Grub) */}
                    <motion.div
                         animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute top-8 left-0 lg:-left-12 bg-neutral-950/90 backdrop-blur-xl p-3 pr-6 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.9)] border border-primary-800 z-30 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-sm overflow-hidden relative border border-primary-700">
                                <img src="https://b.zmtcdn.com/data/dish_photos/66e/a4df57321afafd226b6f6df87f1ef66e.jpeg" alt="Burgers" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div>
                                <p className="text-[10px] text-primary-400 font-bold uppercase tracking-widest leading-none mb-1.5 flex items-center gap-1.5"><svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> High Octane</p>
                                <p className="text-lg font-bold text-primary-100 font-[family-name:var(--font-heading)] leading-none uppercase">Fuel Grub</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Element 2 - Rating/Vibe Badge */}
                    <motion.div
                         animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                         className="absolute bottom-12 -right-2 lg:-right-12 bg-neutral-900/95 backdrop-blur-xl px-4 py-3 lg:px-6 lg:py-5 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.95)] border border-accent/40 border-l-[3px] border-l-accent z-30"
                    >
                        <div className="flex items-center gap-3 lg:gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-sm bg-neutral-950 flex items-center justify-center border border-primary-500/50 text-primary-400 shadow-inner">
                                <span className="text-xl lg:text-2xl">⭐</span>
                            </div>
                            <div>
                                <p className="text-base lg:text-lg font-bold text-primary-100 uppercase font-[family-name:var(--font-heading)] tracking-wider">4.1 Rating</p>
                                <p className="text-[10px] lg:text-xs text-primary-400/80 font-bold uppercase tracking-widest mt-0.5">Over 4,200+ Reviews</p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
