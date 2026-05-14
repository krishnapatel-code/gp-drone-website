"use client"

import { useEffect } from "react"

const capabilities = [
  {
    icon: "workspace_premium",
    title: "RPTO Certified Training",
    description: "DGCA-authorized Remote Pilot Certificate training including theory, simulator, and practical flight sessions for Gujarat Police personnel.",
    features: ["DGCA Approved", "Remote Pilot", "Certified"],
  },
  {
    icon: "videogame_asset",
    title: "Simulator Training",
    description: "State-of-the-art simulator facility providing realistic flight training experience before actual drone operations.",
    features: ["Flight Sim", "Practice", "Safe Training"],
  },
  {
    icon: "engineering",
    title: "Ground Exercise Training",
    description: "Hands-on ground exercises covering pre-flight checks, safety protocols, and drone handling as per DGCA standards.",
    features: ["Pre-Flight", "Safety", "Hands-on"],
  },
  {
    icon: "airplanemode_active",
    title: "Drone Fleet Management",
    description: "Inspection, allocation and maintenance of 109 drones deployed across Gujarat — including Asteria, Tunga, Ninja and Long Range UAVs.",
    features: ["109 Drones", "Maintenance", "Allocation"],
  },
  {
    icon: "gpp_maybe",
    title: "Red Zone Operations",
    description: "Unique NOC obtained from Ministry of Civil Aviation to conduct training operations within Red Zone at GPA Campus, Karai.",
    features: ["NOC Approved", "Red Zone", "MOCA"],
  },
  {
    icon: "category",
    title: "Multi-Category Drone Training",
    description: "Training covers Micro, Small and Rotorcraft category drones — Asteria A200-XT, Tunga, Tethered, Ninja and Long Range UAVs.",
    features: ["Micro", "Small", "Rotorcraft"],
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-accent font-medium">Platform Capabilities</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advanced <span className="text-gradient">Drone Training Capabilities</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            GPDTI delivers comprehensive DGCA-compliant training — from theory and simulation to live flight operations — building Gujarat's certified drone force.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="section-fade-in group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/50">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-rounded text-primary text-[32px]">
                      {capability.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="font-sans text-muted-foreground mb-4 leading-relaxed tracking-wide text-[15px]">
                  {capability.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
