"use client"

import { useState, useEffect } from "react"

const operations = [
  {
    title: "Crime Scene Monitoring",
    badge: "2 Min · Response",
    badgeColor: "text-blue-400 bg-blue-400/10",
    desc: "Live aerial footage helps officers monitor crime scenes and track suspect movement.",
    tags: ["Live Feed", "Suspect Track", "Area Lock"],
    icon: "🚔",
    full: false
  },
  {
    title: "Rath Yatra Crowd Surveillance",
    badge: "Event Watch · 1.5km",
    badgeColor: "text-orange-400 bg-orange-400/10",
    desc: "Drones monitor crowd density and sensitive checkpoints during major events.",
    tags: ["Crowd Density", "Route Watch", "Event Safety"],
    icon: "🚩",
    full: false
  },
  {
    title: "Traffic & Public Safety",
    badge: "12 Active · Junctions",
    badgeColor: "text-green-400 bg-green-400/10",
    desc: "Monitors traffic congestion and emergency vehicle movement across busy junctions.",
    tags: ["Traffic Watch", "Junction Alert", "Road Safety"],
    icon: "🚦",
    full: false
  },
  {
    title: "High-Risk Zone Monitoring",
    badge: "High Alert · Active Zone",
    badgeColor: "text-red-400 bg-red-400/10",
    desc: "Continuous aerial surveillance in sensitive zones, VIP routes, and restricted areas.",
    tags: ["Sensitive Zone", "Live Patrol", "Restricted Area"],
    icon: "⚠️",
    full: false
  },
  {
    title: "Missing Person Tracking",
    badge: "Search Mode · 2km · Scan Area",
    badgeColor: "text-blue-400 bg-blue-400/10",
    desc: "Wide-area aerial scanning to quickly locate missing persons in urban areas, open grounds, and event zones.",
    tags: ["Search Scan", "Thermal View", "Fast Locate"],
    icon: "🔍",
    full: true
  }
]

const steps = [
  {
    title: "Incident Reported",
    desc: "Alert received via control room, citizen call, or sensor trigger. Location coordinates logged.",
    icon: "📡"
  },
  {
    title: "Drone Dispatch",
    desc: "Nearest available drone assigned. Auto-route calculated to incident zone within seconds.",
    icon: "🚁"
  },
  {
    title: "Live Aerial Feed",
    desc: "Drone reaches location and starts live streaming. Officers review real-time footage.",
    icon: "📹"
  },
  {
    title: "Suspect Identification",
    desc: "Thermal / AI detection identifies suspect. Movement tracked, escape routes blocked.",
    icon: "🎯"
  },
  {
    title: "Ground Team Guided",
    desc: "Control room directs ground units in real-time using drone coordinates and visuals.",
    icon: "🗺️"
  },
  {
    title: "Apprehension",
    desc: "Police team reaches the exact location. Suspect apprehended with full aerial support.",
    icon: "✅"
  }
]

export default function OperationsSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="operations" className="relative py-12 md:py-16 overflow-hidden">
      <style jsx>{`
        @keyframes flow {
          0% { top: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .connector-flow::after {
          content: '';
          position: absolute;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #4a9eff, transparent);
          animation: flow 1.5s infinite linear;
        }
      `}</style>

      {/* Background Restoration from Capabilities Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Updated with Capabilities Style */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-accent font-medium uppercase tracking-wider">Field Operations</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time<span className="text-gradient">GPDTI Drone Operations</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Live training monitoring and operational deployment coordination for Gujarat Police drone force.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Operations Grid Styled like Capabilities */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operations.map((op, idx) => (
                <div
                  key={idx}
                  className={`section-fade-in group relative ${op.full ? 'md:col-span-2' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Green Glow Box Animation */}
                  <div className="absolute -inset-0.5 bg-primary/40 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                  <div className="relative glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        {/* Icon Styled like Capabilities */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">
                            {op.icon}
                          </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${op.badgeColor} border border-white/5`}>
                          {op.badge}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-rajdhani)] text-white font-bold text-xl mb-3">{op.title}</h3>
                      <p className="font-sans text-muted-foreground text-[14px] mb-4 leading-relaxed tracking-wide">
                        {op.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {op.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Step-by-Step Flow Inspired by Capabilities Stats/Dashboard */}
          <div className="lg:w-[450px]">
            <div className="space-y-4">
              {steps.map((step, idx) => {
                // Modified logic: Steps now remain highlighted once reached
                const isReached = idx <= activeStep
                const isCurrent = idx === activeStep
                const isCompleted = idx < activeStep

                return (
                  <div key={idx} className="relative flex gap-6">
                    {/* Connector & Circle with Accent Glow */}
                    <div className="flex flex-col items-center">
                      <div className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-500 
                        ${isReached ? 'border-primary text-white bg-primary/20 shadow-[0_0_20px_rgba(74,158,255,0.4)]' : 'border-white/10 text-white/30 bg-transparent'}`}
                      >
                        {idx + 1}
                      </div>

                      {idx !== steps.length - 1 && (
                        <div className={`w-[2px] h-full min-h-[40px] relative transition-colors duration-500 ${isCompleted ? 'bg-primary shadow-[0_0_10px_#4a9eff]' : 'bg-white/5'}`}>
                          {isCurrent && <div className="connector-flow" />}
                        </div>
                      )}
                    </div>

                    {/* Step Card with Glass Effect - Stays highlighted once reached */}
                    <div className={`flex-1 glass-card rounded-2xl p-5 border transition-all duration-500 flex justify-between items-center group
                      ${isReached ? 'opacity-100 border-primary/50 translate-x-2' : 'opacity-35 border-white/5 translate-x-0'}`}
                    >
                      <div>
                        <h4 className="font-[family-name:var(--font-rajdhani)] text-white font-bold text-lg mb-1">{step.title}</h4>
                        <p className="font-sans text-xs text-muted-foreground leading-normal max-w-[280px] tracking-wide">
                          {step.desc}
                        </p>
                      </div>
                      <div className={`text-2xl transition-transform duration-500 ${isCurrent ? 'scale-125' : 'group-hover:scale-110 scale-100'}`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
