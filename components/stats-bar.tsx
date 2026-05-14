"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "TRAINING PROGRAMS", value: "14 Conducted" },
  { label: "REGIONAL REACH", value: "33 Districts & Cities" },
  { label: "RPTO AUTHORIZATION", value: "102 Certified" },
  { label: "DRONE FLEET", value: "5 Categories" },
]

export default function StatsBar() {
  return (
    <div className="relative z-20 -mt-10 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Gradient Border Wrapper */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
          
          {/* Main Container */}
          <div className="relative bg-[#0a0a0b]/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="relative flex flex-col items-center justify-center py-2 px-4 group/item">
                  {/* Vertical Separator */}
                  {index !== stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
                  )}
                  
                  <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[1.5px] mb-1.5 opacity-70 group-hover/item:opacity-100 transition-opacity">
                    {stat.label}
                  </div>
                  <div className="font-[family-name:var(--font-rajdhani)] text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
