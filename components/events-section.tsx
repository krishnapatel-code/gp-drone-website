"use client"

import { GraduationCap, Plane, Settings, Target } from "lucide-react"

const events = [
  {
    icon: GraduationCap,
    title: "Drone Training Workshops",
    description: "Comprehensive training programs for police officers on drone operations, maintenance, and safety protocols.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    icon: Plane,
    title: "Police Technology Demos",
    description: "Live demonstrations of latest drone capabilities for senior officers and government officials.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80",
  },
  {
    icon: Settings,
    title: "Operational Readiness Sessions",
    description: "Regular drills and exercises to ensure rapid deployment capability across all zones.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=600&q=80",
  },
  {
    icon: Target,
    title: "Field Deployment Training",
    description: "Hands-on training in real-world environments for practical operational experience.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80",
  },
]

export default function EventsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
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
                  {/* Image */}
                  <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent sm:bg-gradient-to-l" />
                    
                    {/* Icon on Image */}
                    <div className="absolute top-4 left-4 sm:hidden w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    {/* Icon - Desktop */}
                    <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
