"use client"

import { Clock, Eye, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: "school",
    title: "782+ Personnel Trained",
    description: "Trained by GPDTI instructors and company representatives across institute and field locations throughout Gujarat.",
  },
  {
    icon: "flight_takeoff",
    title: "109 Drones Deployed",
    description: "Strategically deployed across cities, ranges, and districts of Gujarat including Ahmedabad, Surat, Vadodara, Rajkot and 40+ locations.",
  },
  {
    icon: "verified",
    title: "DGCA RPTO Authorized",
    description: "Successfully obtained Remote Pilot Training Organisation authorization from DGCA after rigorous inspection of infrastructure, simulators, and training facilities.",
  },
  {
    icon: "military_tech",
    title: "5 Remote Pilot Instructors",
    description: "Certified Remote Pilot Instructors trained through elite programs at Drone Destination Gurugram, CAPT Bhopal, Flapone Haryana, and Dronacharya Gandhinagar.",
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
            About <span className="text-gradient">GPDTI</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            The Gujarat Police Drone Training Institute is a center of excellence,
            transforming how law enforcement monitors, responds, and protects citizens through professional UAV expertise.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="section-fade-in">
            <div className="relative group p-[2px] rounded-[2.5rem] bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 shadow-2xl transition-all duration-500 hover:shadow-primary/20">
              <div className="relative rounded-[calc(2.5rem-2px)] bg-background/50 backdrop-blur-sm p-1">
                {/* Light-colored inner container for maximum drone visibility */}
                <div className="relative aspect-video rounded-[calc(2rem+4px)] bg-gradient-to-br from-[#f8fafc] to-[#cbd5e1] flex items-center justify-center p-2 md:p-4">
                  {/* Subtle Tech Grid on light background */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:32px_32px]" />

                  {/* Soft Inner Shadow for depth */}
                  <div className="absolute inset-0 shadow-[inner_0_0_60px_rgba(0,0,0,0.08)]" />

                  {/* The Drone Image - Ensuring full visibility */}
                  <img
                    src="/images/drone.png"
                    alt="Advanced Police Drone"
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.3)] scale-100 transition-transform duration-700"
                  />

                  {/* Technical Overlay Elements - Dark with Gradient Borders */}
                  <div className="absolute top-6 left-6">
                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-primary via-accent to-primary">
                      <div className="px-3 py-1.5 rounded-[7px] bg-white/90 backdrop-blur-md">
                        <p className="text-[10px] font-bold text-slate-900 tracking-tighter uppercase">Model: GP-UAV-X1</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-accent via-primary to-accent">
                      <div className="px-3 py-1.5 rounded-[7px] bg-white/90 backdrop-blur-md flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                        <p className="text-[10px] font-bold text-slate-900 tracking-tighter uppercase">System: Online</p>
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
                What is GPDTI?
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                Gujarat Police Drone Training Institute provides Remote Pilot Certificate training in Gujarat State. Located at Gujarat Police Academy Campus, Karai, Gandhinagar — it is India's first state police-run, DGCA-authorized Remote Pilot Training Organisation (RPTO).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                To become a leading center of excellence in drone training for law enforcement, enabling advanced, technology-driven policing and public safety through skilled and certified remote pilots.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px]">
                To establish and operate a DGCA-certified drone training institute under the State Police that delivers high-quality, standardized training to personnel — enabling them to become competent and certified Remote Pilots, while ensuring strict adherence to DGCA regulatory guidelines and operational excellence.
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
                  <span className="material-symbols-rounded text-primary text-[28px]">
                    {benefit.icon}
                  </span>
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
