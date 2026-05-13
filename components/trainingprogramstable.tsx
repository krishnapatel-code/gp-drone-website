"use client"

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { User, School, Users } from "lucide-react";

const PAGE_DURATION = 5000; // 5 seconds

const allPrograms = [
    // Page 1
    { name: "Drone Product Training", trainees: 365 },
    { name: "UAV Pilot/Co-Pilot Training", trainees: 231 },
    { name: "RPTC Theory", trainees: 102 },
    { name: "Long Range UAV", trainees: 53 },
    { name: "RF Jammer Training", trainees: 40 },
    { name: "Drone and Anti-drone Operation", trainees: 25 },
    { name: "UAV Drone Operate Training", trainees: 18 },
    // Page 2
    { name: "Drone Technology Application", trainees: 17 },
    { name: "Tethered Drone Product Training", trainees: 14 },
    { name: "Certified Hybrid Drone Pilot Training", trainees: 7 },
    { name: "Remote Pilot Instructor", trainees: 5 },
    { name: "Drone Capsule Training", trainees: 3 },
    { name: "Drone Forensics & Regulation", trainees: 2 },
    { name: "Drone Technology Course", trainees: 2 },
];

/**
 * Count up animation component
 */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function TrainingProgramsTable() {
    const [page, setPage] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const currentProgress = (elapsed % PAGE_DURATION) / PAGE_DURATION;
            setProgress(currentProgress * 100);

            const currentPage = Math.floor(elapsed / PAGE_DURATION) % 2;
            setPage(currentPage);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const visiblePrograms = allPrograms.slice(page * 7, (page + 1) * 7);

    return (
        <section className="relative py-24 px-4 overflow-hidden border-t border-white/5 bg-background" id="programs">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-background opacity-20 -z-10" />
            
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20 section-fade-in">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <span className="text-sm text-primary font-medium uppercase tracking-wider">Curriculum Analytics</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Training Force <span className="text-gradient">Analytics</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide"
                    >
                        Scaling Gujarat's drone capabilities through 14 specialized rigorous modules designed for tactical excellence.
                    </motion.p>
                </div>

                {/* 2 Column Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

                    {/* Left Column: Major Metrics */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex-1 bg-zinc-900/20 backdrop-blur-md p-10 rounded-[32px] border border-white/5 flex flex-col justify-center overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-15 group-hover:opacity-20 transition-opacity">
                                <User size={180} className="text-primary" />
                            </div>
                            <span className="text-primary font-bold font-[family-name:var(--font-rajdhani)] text-xs tracking-widest uppercase mb-4 block">Total Certified Force</span>
                            <div className="text-8xl md:text-9xl font-[family-name:var(--font-rajdhani)] font-black text-white leading-none mb-6">
                                <CountUp value={782} suffix="+" />
                            </div>
                            <p className="text-white/40 text-lg max-w-xs leading-relaxed font-sans">
                                Mission-ready personnel trained across tactical, technical and regulatory domains.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { val: 14, label: "Program Modules", icon: School },
                                { val: 365, label: "Max Batch Size", icon: Users },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="relative group cursor-pointer"
                                >
                                    {/* Operations-style Glow Effect */}
                                    <div className="absolute -inset-0.5 bg-primary/40 rounded-[24px] opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                                    
                                    <div className="relative h-full bg-zinc-900/40 backdrop-blur-md p-6 rounded-[22.5px] border border-white/5 transition-all duration-300 group-hover:border-primary/50 flex flex-col items-start">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="text-3xl font-[family-name:var(--font-rajdhani)] font-bold text-white mb-1">
                                            <CountUp value={item.val} />
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold font-sans">{item.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: High-Tech List (Replaces Table) */}
                    <div className="lg:col-span-7 flex flex-col group relative">
                        {/* Hover Glow Effect (Behind everything) */}
                        <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                        <div className="relative p-[1.5px] rounded-[32px] flex-1 flex flex-col overflow-hidden">
                            {/* Gradient Border Anim (Only visible in the 1.5px padding) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]" />

                            <div className="relative flex-1 bg-zinc-950/95 backdrop-blur-2xl rounded-[30px] overflow-hidden flex flex-col">
                                {/* Transparent Header */}
                                <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                                    <span className="text-[10px] font-black tracking-widest text-primary uppercase font-sans">Operational Curriculum</span>
                                    <div className="flex gap-1">
                                        {[0, 1].map(i => (
                                            <div key={i} className={`h-1 rounded-full transition-all ${page === i ? 'w-4 bg-primary' : 'w-1 bg-white/10'}`} />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 relative min-h-[450px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={page}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 space-y-2"
                                        >
                                            {visiblePrograms.map((prog, idx) => (
                                                <div
                                                    key={prog.name}
                                                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.05] transition-colors border border-transparent hover:border-white/5"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-xs font-mono text-white/20">0{(page * 7) + idx + 1}</span>
                                                        <span className="text-white/90 font-medium text-sm md:text-base font-sans">{prog.name}</span>
                                                    </div>
                                                    <span className="text-2xl font-[family-name:var(--font-rajdhani)] font-black text-primary">{prog.trainees}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Progress Bar */}
                                <div className="px-8 py-1 bg-white/5">
                                    <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-accent"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Bottom Impact Row - Glass Effect */}
                                <div className="px-8 py-6 bg-white/5 backdrop-blur-md flex justify-between items-center border-t border-white/10">
                                    <span className="text-gradient font-black uppercase tracking-widest text-sm font-sans">Collective Impact</span>
                                    <span className="text-gradient font-[family-name:var(--font-rajdhani)] font-black text-2xl">782+ Certified Personnel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simplified Bottom Metric Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-[1.5px] rounded-2xl overflow-hidden mt-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary" />
                    <div className="relative w-full bg-zinc-950/90 backdrop-blur-xl rounded-[14.5px] p-6 md:p-8 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl">
                        {[
                            { label: "Active Programs", val: "14 Skills" },
                            { label: "Training Standard", val: "DGCA Certified" },
                            { label: "Regional Reach", val: "All Gujarat" },
                            { label: "Elite Partners", val: "4 Organizations" }
                        ].map(stat => (
                            <div key={stat.label} className="w-full md:w-auto md:px-12 flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1 font-sans">{stat.label}</span>
                                <span className="text-xl font-[family-name:var(--font-rajdhani)] font-black text-white">{stat.val}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

