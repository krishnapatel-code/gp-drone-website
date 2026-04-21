"use client"

import { Clock, Eye, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Faster Response Time",
    description: "Drones can reach incident locations within 2-3 minutes, significantly faster than ground vehicles in congested areas.",
  },
  {
    icon: Eye,
    title: "Better City Visibility",
    description: "Aerial surveillance provides comprehensive coverage of urban areas, enabling real-time monitoring of public spaces.",
  },
  {
    icon: Shield,
    title: "Officer Safety",
    description: "Remote reconnaissance capability allows officers to assess dangerous situations before physical intervention.",
  },
  {
    icon: Users,
    title: "Crowd Intelligence",
    description: "AI-powered analytics for crowd density estimation, flow patterns, and potential security threat detection.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-primary font-medium">About The Initiative</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Know About <span className="text-gradient">Smart Drone Policing</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Gujarat Police has pioneered drone-based surveillance through this advanced initiative,
            transforming how law enforcement monitors, responds, and protects citizens across the state.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="section-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                {/* Drone Illustration */}
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                    alt="Drone surveillance over city"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* Overlay Elements */}
                  <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                      </span>
                      <span className="text-xs text-foreground">LIVE</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Active Surveillance</p>
                          <p className="font-[family-name:var(--font-rajdhani)] text-lg text-foreground">Zone Alpha-7</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Coverage</p>
                          <p className="font-[family-name:var(--font-rajdhani)] text-lg text-accent">2.5 km²</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="section-fade-in space-y-6">
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                What is Drone Policing?
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                Drone policing integrates unmanned aerial vehicles (UAVs) with advanced AI capabilities
                to enhance law enforcement operations. These systems provide real-time aerial surveillance,
                rapid incident response, and intelligent threat detection.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                Why Gujarat Police Adopted It?
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                With increasing urbanization and complex security challenges, traditional policing methods
                needed enhancement. Drone technology offers unprecedented situational awareness, faster
                response times, and improved officer safety during high-risk operations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                How It Improves Public Safety?
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                By providing aerial coverage of large areas, drones enable proactive crime prevention,
                rapid emergency response, and comprehensive event monitoring. AI-powered analytics
                help identify potential threats before they escalate.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="section-fade-in glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-[family-name:var(--font-rajdhani)] text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed tracking-wide">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
