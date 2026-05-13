"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const tableData = [
    {
        partner: "Drone Destination Pvt. Ltd.",
        location: "Gurugram",
        focus: "DGCA-certified Remote Pilot Training"
    },
    {
        partner: "CAPT — Central Academy for Police Training",
        location: "Bhopal, MP",
        focus: "Tactical Law Enforcement & Drone Operations"
    },
    {
        partner: "Flapone Aviation",
        location: "Sonepat, Haryana",
        focus: "Maintenance & Specialized Flight"
    },
    {
        partner: "Dronacharya School",
        location: "Army Station, Gandhinagar",
        focus: "Military-Grade Operations"
    }
];

export default function TrainingPartners() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="partners">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-background opacity-20 -z-10" />

            {/* Section Header */}
            <div className="text-center mb-16 section-fade-in">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                >
                    <span className="text-sm text-primary font-medium uppercase tracking-wider">Staff Development</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
                >
                    Our <span className="text-gradient">Training Partners</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed tracking-wide"
                >
                    GPDTI staff trained through elite specialized programs across India to maintain the highest standards of drone aviation.
                </motion.p>
            </div>

            {/* 12 Column Layout for precise control (7 for image, 5 for table) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                {/* Left Column: Image with Caption (7/12 width) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-primary/20 cursor-pointer h-full"
                    onClick={() => setIsLightboxOpen(true)}
                >
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                            <Maximize2 className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    
                    <img
                        src="/images/trainingpartner.png"
                        alt="GPDTI Staff training"
                        className="w-full h-full object-cover transition-all duration-500"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-zinc-950/80 backdrop-blur-xl px-6 py-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <div className="space-y-1">
                                    <p className="font-[family-name:var(--font-rajdhani)] text-white text-sm md:text-base font-bold leading-tight">
                                        GPDTI Staff Training Program
                                    </p>
                                    <p className="text-white/50 text-xs mt-1">
                                        CAPT Bhopal — Drone Technology and Its Application
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-[1px] rounded-full bg-gradient-to-r from-primary via-accent to-primary">
                                    <div className="px-3 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">December 2024</span>
                                    </div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column: Styled Table with Gradient Border (5/12 width) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 h-full p-[1px] bg-gradient-to-br from-primary via-accent to-primary/20 rounded-3xl"
                >
                    <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-zinc-950/90 backdrop-blur-xl flex flex-col">
                        <div className="p-6 relative bg-white/5 text-center">
                            <h3 className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-white mb-1">Elite Partners</h3>
                            <p className="text-xs text-white/50">Authorized Training Institutions</p>
                            {/* Header Gradient Border */}
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/50 via-accent/50 to-transparent" />
                        </div>
                        
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="divide-y divide-white/5">
                                {/* Table Header Replacement */}
                                <div className="grid grid-cols-2 px-6 py-4 bg-white/10 relative sticky top-0 z-10 backdrop-blur-md text-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Partner</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">Focus</span>
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-accent to-transparent opacity-30" />
                                </div>

                                {/* Table Body Replacement */}
                                {tableData.map((row, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-2 px-6 py-6 group transition-colors hover:bg-white/5 relative"
                                    >
                                        <div className="pr-2">
                                            <div className="font-[family-name:var(--font-rajdhani)] text-base font-bold text-white group-hover:text-primary transition-colors">
                                                {row.partner}
                                            </div>
                                            <div className="text-[10px] text-white/40 font-mono mt-1 uppercase">
                                                {row.location}
                                            </div>
                                        </div>
                                        <div className="pl-2">
                                            <div className="text-xs text-white/60 italic leading-relaxed">
                                                {row.focus}
                                            </div>
                                        </div>
                                        {/* Subtle Gradient Row Divider */}
                                        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-transparent" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src="/images/trainingpartner.png"
                                alt="GPDTI Staff training"
                                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <p className="text-white/80 text-sm font-medium italic">
                                    GPDTI Staff at CAPT — Drone Technology and Its Application Course, Bhopal, December 2024
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

