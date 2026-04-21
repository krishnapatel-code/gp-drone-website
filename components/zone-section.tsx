"use client"

import { AlertOctagon, AlertTriangle, CheckCircle2 } from "lucide-react"

const zones = [
  {
    type: "Red Zone",
    subtitle: "No Fly",
    icon: AlertOctagon,
    description: "Restricted airspace. No drone operations permitted. Includes airports, military installations, and high-security government buildings.",
    color: "from-red-500/20 to-red-600/5",
    borderColor: "border-red-500/50",
    iconColor: "text-red-500",
    glowColor: "shadow-red-500/20",
  },
  {
    type: "Yellow Zone",
    subtitle: "Restricted",
    icon: AlertTriangle,
    description: "Controlled airspace. Drone operations require prior approval and coordination. Includes sensitive areas and temporary event restrictions.",
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/50",
    iconColor: "text-yellow-500",
    glowColor: "shadow-yellow-500/20",
  },
  {
    type: "Green Zone",
    subtitle: "Authorized Police Operation",
    icon: CheckCircle2,
    description: "Open operational zones. Authorized Gujarat Police drone operations permitted. Standard safety protocols apply.",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/50",
    iconColor: "text-green-500",
    glowColor: "shadow-green-500/20",
  },
]

export default function ZoneSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-primary font-medium">Airspace Zones</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Drone <span className="text-gradient">Zone Awareness</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Understanding operational zones is critical for safe and compliant drone operations. 
            Our platform provides real-time zone visualization and compliance monitoring.
          </p>
        </div>

        {/* Zone Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="section-fade-in group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`relative h-full rounded-2xl border ${zone.borderColor} bg-gradient-to-b ${zone.color} p-8 transition-all duration-300 hover:shadow-2xl ${zone.glowColor}`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${zone.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-background/50 flex items-center justify-center ${zone.iconColor}`}>
                      <zone.icon className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 mb-6">
                    <h3 className={`font-[family-name:var(--font-rajdhani)] text-2xl font-bold ${zone.iconColor}`}>
                      {zone.type}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {zone.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                    {zone.description}
                  </p>
                </div>

                {/* Corner Decorations */}
                <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${zone.borderColor} rounded-tr-lg opacity-50`} />
                <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 ${zone.borderColor} rounded-bl-lg opacity-50`} />
              </div>
            </div>
          ))}
        </div>

        {/* Map Visualization Placeholder */}
        <div className="mt-12 section-fade-in">
          <div className="glass-card rounded-2xl p-8 overflow-hidden">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&q=80"
                alt="Zone Map Visualization"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-rajdhani)] text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Real-Time Zone Mapping
                  </div>
                  <p className="font-sans text-muted-foreground max-w-md mx-auto leading-relaxed tracking-wide">
                    Interactive zone visualization with live drone positions and flight path compliance
                  </p>
                </div>
              </div>
              
              {/* Floating Zone Indicators */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping" />
              <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
