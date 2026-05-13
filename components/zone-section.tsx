"use client"

import React from "react"
import { Compass } from "lucide-react"

export default function ZoneSection() {
  return (
    <section id="zones" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Restoration from Operations Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Airspace Zones</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Drone <span className="text-gradient">Zone Awareness</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            GPDTI operates under special NOC from Ministry of Civil Aviation within Red Zone at Gujarat Police Academy, Karai — ensuring full regulatory compliance for all training operations.
          </p>
        </div>

        {/* MAIN MAP IMAGE (Circles Removed for Adjustment) */}
        <div className="relative max-w-[1100px] mx-auto section-fade-in">
          <div className="relative rounded-[16px] overflow-hidden group shadow-2xl border border-white/5 bg-background/50">
            <img
              src="https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/map_l1lews"
              alt="Ahmedabad Drone Airspace Map"
              className="w-full h-auto object-cover opacity-80"
            />

            {/* Map Overlay for Darkening */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/40 to-transparent pointer-events-none" />

            {/* Watermark Cover & Compass Rose */}
            <div className="absolute bottom-4 right-4 w-[140px] h-10 bg-[#0a0e1a] flex items-center justify-end pr-4 z-40 rounded-lg">
              <div className="flex items-center gap-2 opacity-50">
                <Compass className="w-5 h-5 text-[#1a2035]" />
                <span className="text-[10px] font-bold text-[#1a2035] tracking-[2px] uppercase">Navigation</span>
              </div>
            </div>
          </div>

          {/* ZONE INFO CARDS (Below Map) */}
          <div className="flex flex-col md:flex-row gap-[16px] mt-12 max-w-[1100px] mx-auto pb-4">
            {/* Card 1 - RED */}
            <div className="flex-1 bg-red-600/5 rounded-[10px] border-l-[3px] border-red-500 p-[16px] transition-all duration-300 hover:bg-red-600/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-red-400">Red Zone</span>
              </div>
              <h4 className="text-[14px] text-white font-semibold mb-2">No Fly Zone</h4>
              <p className="text-[12px] text-[#aab3c0] leading-relaxed">
                3km radius. Airports, Military, ISRO, Stadiums, Jails. Complete ban.GPDTI operates here under special MOCA NOC.
              </p>
            </div>

            {/* Card 2 - YELLOW */}
            <div className="flex-1 bg-yellow-500/5 rounded-[10px] border-l-[3px] border-yellow-500 p-[16px] transition-all duration-300 hover:bg-yellow-500/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(255,200,0,0.6)]" />
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-yellow-500">Yellow Zone</span>
              </div>
              <h4 className="text-[14px] text-white font-semibold mb-2">Permission Required</h4>
              <p className="text-[12px] text-[#aab3c0] leading-relaxed">
                2km radius. Govt buildings, Old City, Airport buffer. Prior ATC approval needed.
              </p>
            </div>

            {/* Card 3 - GREEN */}
            <div className="flex-1 bg-primary/5 rounded-[10px] border-l-[3px] border-primary p-[16px] transition-all duration-300 hover:bg-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,230,180,0.6)]" />
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-primary">Green Zone</span>
              </div>
              <h4 className="text-[14px] text-white font-semibold mb-2">Authorized Operations</h4>
              <p className="text-[12px] text-[#aab3c0] leading-relaxed">
                Open zones. Chandkheda, Bopal, Naroda, Sanand outskirts. Gujarat Police ops permitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
