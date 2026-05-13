"use client"

import { GraduationCap, Target, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    icon: GraduationCap,
    title: "Drone Training Workshops",
    description: "Theoretical training sessions conducted for 102 police personnel covering drone operations, safety protocols, and technical knowledge at RPTO-GPDTI.",
    image: "/images/event2.png",
  },
  {
    icon: GraduationCap,
    title: "OPERATIONAL READINESS SESSIONS",
    description: "Hands-on ground exercise drills conducted to ensure practical drone handling capability and rapid deployment readiness across all police zones.",
    image: "/images/event3.png",
  },
  {
    icon: Target,
    title: "FIELD DEPLOYMENT TRAINING",
    description: "Advanced simulator-based training provided to police personnel for real-world drone operation experience in a controlled environment at GPDTI.",
    image: "/images/event4.png",
  },
  {
    icon: Monitor,
    title: "POLICE TECHNOLOGY DEMOS",
    description: "First successful batch of RPTO Theory & Simulator training completed at Gujarat Police Drone Training Institute (GPDTI) — a milestone in police drone capability.",
    image: "/images/event5.png",
  },
]

export default function EventsSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="training" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-primary font-medium">Training & Development</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events & <span className="text-gradient">Training</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Building expertise through comprehensive training programs and regular operational exercises.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="section-fade-in group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full glass-card glass-card-hover rounded-2xl overflow-hidden">
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Image Container - Fixed consistent width */}
                  <div className="relative w-full sm:w-[200px] h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Icon - Mobile only on image */}
                    <div className="absolute top-4 left-4 sm:hidden w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                      <event.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-6 md:p-7 flex flex-col justify-center border-l border-white/5 bg-white/[0.01]">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Icon */}
                      <div className="flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-[family-name:var(--font-rajdhani)] text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-wide uppercase">
                        {event.title}
                      </h3>
                    </div>

                    <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[14px]">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center section-fade-in">
          <div className="relative inline-block">
            {/* Glow effect now always visible */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl opacity-100 blur transition-opacity duration-300" />

            <div className="relative glass-card inline-flex flex-col md:flex-row items-center gap-6 px-8 py-6 rounded-3xl border-accent/50 bg-background/40">
              <p className="font-sans text-lg text-foreground font-medium">
                Interested in upcoming Drone Events & Training programs?
              </p>
              <div className="relative">
                <Button
                  variant="outline"
                  className="h-10 px-6 border-accent text-white hover:text-white bg-transparent hover:bg-transparent text-sm font-semibold cursor-default transition-all duration-300 hover:scale-105 rounded-md"
                >
                  Register Here
                </Button>
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-accent text-[8px] font-bold text-accent-foreground rounded uppercase tracking-tighter shadow-lg">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
