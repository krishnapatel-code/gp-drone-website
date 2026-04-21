"use client"

import { Camera, Users, Car, AlertTriangle, UserSearch } from "lucide-react"

const useCases = [
  {
    icon: Camera,
    title: "Crime Scene Monitoring",
    description: "Live aerial footage helps officers monitor the crime scene, track suspect movement, and secure the surrounding area before the ground team arrives.",
    image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600&q=80",
    badge: "LIVE OPERATION",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    chips: ["Live Feed", "Suspect Track", "Area Lock"],
    operationalBadge: { label: "Response", value: "2 Min" },
  },
  {
    icon: Users,
    title: "Rath Yatra Crowd Surveillance",
    description: "Drones monitor crowd density, route movement, and sensitive checkpoints during major public events like Rath Yatra for safer crowd control and emergency response.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    badge: "EVENT WATCH",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    chips: ["Crowd Density", "Route Watch", "Event Safety"],
    operationalBadge: { label: "Coverage", value: "1.5 km" },
  },
  {
    icon: Car,
    title: "Traffic & Public Safety",
    description: "Used to monitor traffic congestion, accident-prone junctions, and emergency vehicle movement across busy city roads.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80",
    badge: "CITY TRAFFIC",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    chips: ["Traffic Watch", "Junction Alert", "Road Safety"],
    operationalBadge: { label: "Junctions", value: "12 Active" },
  },
  {
    icon: AlertTriangle,
    title: "High-Risk Zone Monitoring",
    description: "Continuous aerial surveillance in sensitive zones, crowded markets, VIP routes, and restricted areas.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80",
    badge: "HIGH ALERT",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    chips: ["Sensitive Zone", "Live Patrol", "Restricted Area"],
    operationalBadge: { label: "Zone", value: "Active" },
  },
  {
    icon: UserSearch,
    title: "Missing Person Tracking",
    description: "Wide-area aerial scanning helps quickly locate missing persons in urban areas, open grounds, and event zones.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    badge: "SEARCH MODE",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    chips: ["Search Scan", "Thermal View", "Fast Locate"],
    operationalBadge: { label: "Scan Area", value: "2 km" },
  },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-primary font-medium">Field Operations</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time <span className="text-gradient">Police Drone Operations</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            See how Gujarat Police uses drone surveillance in real-world field operations 
            for faster response and public safety.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="section-fade-in group h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative w-full aspect-video shrink-0 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Operation Badge - Top Left */}
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg border text-xs font-semibold uppercase tracking-wider ${useCase.badgeColor}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {useCase.badge}
                    </div>
                  </div>

                  {/* Operational Stats Badge - Top Right */}
                  <div className="absolute top-4 right-4 glass-card rounded-lg px-3 py-2 border border-primary/30">
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-rajdhani)] text-lg font-bold text-accent">
                        {useCase.operationalBadge.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {useCase.operationalBadge.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 bg-card/40">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <useCase.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px] mb-4">
                    {useCase.description}
                  </p>
                  
                  {/* Bottom Chips */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {useCase.chips.map((chip, chipIndex) => (
                      <span
                        key={chipIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
