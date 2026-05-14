"use client"

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Maximize2 } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/images/trainingpartner.png",
        imageCaption: "GPDTI Staff Training Program — CAPT Bhopal, December 2024",
        title: "Our Training Partners",
        objectFit: "cover",
        content: {
            type: "table",
            data: [
                { partner: "Drone Destination Pvt. Ltd.", location: "Gurugram", focus: "DGCA-certified Remote Pilot Training" },
                { partner: "CAPT — Central Academy for Police Training", location: "Bhopal, MP", focus: "Tactical Law Enforcement & Drone Operations" },
                { partner: "Flapone Aviation", location: "Sonepat, Haryana", focus: "Maintenance & Specialized Flight" },
                { partner: "Dronacharya School", location: "Army Station, Gandhinagar", focus: "Military-Grade Operations" },
            ]
        }
    },
    {
        id: 2,
        image: "/images/trainningpartner2.png",
        imageCaption: "NOC Meeting — Ministry of Civil Aviation & Airport Authority of India",
        title: "Red Zone Operations",
        objectFit: "cover",
        content: {
            type: "list",
            points: [
                "NOC obtained from Ministry of Civil Aviation, Government of India",
                "Permissions obtained from Airports Authority of India",
                "Standard Operating Procedures (SOPs) approved for Red Zone",
                "GPDTI legally operates within Red Zone at GPA Campus, Karai, Gandhinagar",
            ]
        }
    },
    {
        id: 3,
        image: "/images/gallery4.png",
        imageCaption: "DGCA Inspection Team at GPDTI — RPTO Authorization Process",
        title: "DGCA Inspection",
        objectFit: "cover",
        content: {
            type: "list",
            points: [
                "Full infrastructure, equipment and training facilities assessed",
                "Classrooms, simulators, drones and workstations verified",
                "Training and Procedures Manual examined and approved by DGCA",
                "Full compliance with DGCA norms and standards confirmed",
            ]
        }
    },
    {
        id: 4,
        image: "/images/certficate.png",
        imageCaption: "RPTO Certificate of Authorisation — Issued by DGCA, Government of India",
        title: "RPTO Authorization",
        objectFit: "contain",
        imageBg: "bg-white/5",
        tightContainer: true,
        content: {
            type: "cards",
            cards: [
                { label: "File No", value: "DGCA-31036/8/2025-DRONE-Dte" },
                { label: "Authorization No", value: "RPTO No. 30/2025" },
                { label: "Valid From", value: "11.06.2025" },
                { label: "Valid Till", value: "10.06.2035" },
                { label: "Category", value: "Rotorcraft — Small" },
                { label: "Issued By", value: "Maneesh Kumar, Joint DG" },
            ]
        }
    }
];

export default function TrainingPartners() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextSlide = useCallback(() => {
        if (isLightboxOpen) return;
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [isLightboxOpen]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative py-12 md:py-16 overflow-hidden" id="partners">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
            <div className="absolute inset-0 grid-background opacity-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 section-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                        <span className="text-sm text-accent font-medium">Institute Highlights</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Institute Highlights & <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
                        Key milestones, regulatory approvals, and training accomplishments of GPDTI
                    </p>
                </div>

                <div className="relative group">
                    {/* Carousel Container */}
                    <div className="relative h-[750px] lg:h-[450px] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                className="w-full h-full"
                            >
                                <div className="flex flex-col lg:flex-row gap-12 h-full items-stretch justify-center">
                                    {/* Left Side: Image (Animate from Left) */}
                                    <motion.div
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className={`relative group/img rounded-[24px] overflow-hidden border border-accent/20 h-[350px] lg:h-full cursor-pointer ${slides[currentSlide].imageBg || ""} ${slides[currentSlide].tightContainer ? "w-full lg:w-auto lg:aspect-[3/4]" : "w-full lg:w-[58.33%]"}`}
                                        onClick={() => setIsLightboxOpen(true)}
                                    >
                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/img:opacity-100 transition-opacity">
                                            <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                                                <Maximize2 className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <img
                                            src={slides[currentSlide].image}
                                            alt={slides[currentSlide].title}
                                            className={`w-full h-full transition-transform duration-700 ${slides[currentSlide].objectFit === "contain" ? "object-contain p-4" : "object-cover"}`}
                                        />
                                        {/* Dark Overlay Caption */}
                                        <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-md p-6 border-t border-white/10">
                                            <p className="text-sm text-white/90 font-medium leading-relaxed">
                                                {slides[currentSlide].imageCaption}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Right Side: Content (Animate from Right) */}
                                    <motion.div
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 100, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                        className={`flex flex-col justify-center py-4 ${slides[currentSlide].tightContainer ? "flex-1 max-w-xl" : "w-full lg:w-[41.66%]"}`}
                                    >
                                        <h3 className="font-[family-name:var(--font-rajdhani)] text-3xl md:text-4xl font-bold text-foreground mb-8">
                                            {slides[currentSlide].title}
                                        </h3>

                                        {/* Render Content Based on Type */}
                                        {slides[currentSlide].content?.type === "table" && (
                                            <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                                                <table className="w-full text-left text-sm">
                                                    <thead>
                                                        <tr className="bg-white/5 border-b border-white/10">
                                                            <th className="px-6 py-4 font-bold text-accent uppercase tracking-wider">Partner</th>
                                                            <th className="px-6 py-4 font-bold text-accent uppercase tracking-wider">Focus</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-white/5">
                                                        {slides[currentSlide].content.data?.map((row, idx) => (
                                                            <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                                                                <td className="px-6 py-4">
                                                                    <div className="font-bold text-foreground mb-0.5">{row.partner}</div>
                                                                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{row.location}</div>
                                                                </td>
                                                                <td className="px-6 py-4 text-muted-foreground italic leading-relaxed">
                                                                    {row.focus}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {slides[currentSlide].content?.type === "list" && (
                                            <ul className="space-y-4">
                                                {slides[currentSlide].content.points?.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-4 group/item">
                                                        <div className="mt-1 flex-shrink-0">
                                                            <CheckCircle2 className="w-6 h-6 text-accent drop-shadow-[0_0_8px_var(--glow-green)]" />
                                                        </div>
                                                        <span className="text-muted-foreground text-lg leading-relaxed group-hover/item:text-foreground transition-colors">
                                                            {point}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {slides[currentSlide].content?.type === "cards" && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {slides[currentSlide].content.cards?.map((card, idx) => (
                                                    <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-accent/30 transition-all group/card">
                                                        <div className="text-[9px] font-bold text-accent uppercase tracking-[2px] mb-1">
                                                            {card.label}
                                                        </div>
                                                        <div className="text-foreground text-sm font-medium transition-colors truncate">
                                                            {card.value}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentSlide(idx);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                                    ? "w-8 bg-accent"
                                    : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
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
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <p className="text-white/80 text-sm font-medium italic">
                                    {slides[currentSlide].imageCaption}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
