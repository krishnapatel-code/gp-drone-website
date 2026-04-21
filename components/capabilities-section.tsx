"use client"

import { Video, Zap, Users, Search, Car, UserSearch } from "lucide-react"

const capabilities = [
  {
    icon: Video,
    title: "Real-Time Aerial Surveillance",
    description: "Live drone camera monitoring to watch roads, public places, and important city areas in real time.",
    features: ["Live Camera", "City Watch", "Area Coverage"],
  },
  {
    icon: Zap,
    title: "Rapid Incident Response",
    description: "Drones quickly reach the location and help police respond faster during emergencies and incidents.",
    features: ["Fast Action", "Quick Support", "Emergency"],
  },
  {
    icon: Users,
    title: "Crowd & Event Monitoring",
    description: "Helps police monitor large crowds, festivals, and public events to maintain safety and control.",
    features: ["Crowd Safety", "Event Watch", "Public Control"],
  },
  {
    icon: Search,
    title: "Crime Detection Support",
    description: "Drones help track suspicious activities and support police during crime investigations.",
    features: ["Crime Alert", "Activity Track", "Investigation"],
  },
  {
    icon: Car,
    title: "Traffic & Public Safety",
    description: "Used for traffic monitoring, road safety checks, and managing busy public areas.",
    features: ["Traffic Watch", "Road Safety", "Public Areas"],
  },
  {
    icon: UserSearch,
    title: "Missing Persons Tracking",
    description: "Helps locate missing persons quickly by scanning large areas from above.",
    features: ["Search Support", "Live Tracking", "Area Scan"],
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
            Advanced <span className="text-gradient">Surveillance Technology</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Our comprehensive drone surveillance platform combines cutting-edge hardware with 
            AI-powered software to deliver unmatched operational capabilities.
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
                    <capability.icon className="w-8 h-8 text-primary" />
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

        {/* Stats Bar */}
        <div className="mt-16 section-fade-in">
          <div className="glass-card rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100+", label: "Drones Deployed" },
                { value: "33", label: "Zones Covered" },
                { value: "24/7", label: "Operations" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-[family-name:var(--font-rajdhani)] text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
