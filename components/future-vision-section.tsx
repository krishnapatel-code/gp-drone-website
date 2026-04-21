"use client"

import {
  Database,
  Users,
  LayoutDashboard,
  BarChart3,
  Lock,
  Send,
  Waves,
  AlertCircle,
  ScanFace,
  Flame,
  Cctv,
} from "lucide-react"

const phase2Features = [
  { icon: Database, title: "Drone Inventory Management", description: "Complete tracking of all drone assets" },
  { icon: Users, title: "Pilot Management", description: "Certification and assignment tracking" },
  { icon: LayoutDashboard, title: "Live Deployment Dashboard", description: "Real-time operational overview" },
  { icon: BarChart3, title: "Analytics Panel", description: "Mission and performance analytics" },
  { icon: Lock, title: "Role-Based Access", description: "Secure multi-level access control" },
]

const phase3Features = [
  { icon: Send, title: "Auto Drone Dispatch", description: "AI-triggered automatic deployment" },
  { icon: Waves, title: "Crowd Density Detection", description: "Real-time crowd analysis algorithms" },
  { icon: AlertCircle, title: "Suspicious Activity Alerts", description: "Behavioral anomaly detection" },
  { icon: ScanFace, title: "Face Recognition", description: "AI-powered identification system" },
  { icon: Flame, title: "Crime Heatmaps", description: "Predictive analytics visualization" },
  { icon: Cctv, title: "CCTV Integration", description: "Unified surveillance network" },
]

export default function FutureVisionSection() {
  return (
    <section id="future" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-accent font-medium">Coming Soon</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Future <span className="text-gradient">Vision</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Our roadmap for transforming Gujarat Police into a fully AI-integrated smart policing force 
            with advanced drone surveillance capabilities.
          </p>
        </div>

        {/* Phase 2 */}
        <div className="mb-16 section-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center neon-glow">
                <span className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                  Phase 2
                </h3>
                <p className="text-sm text-muted-foreground">Management Platform</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {phase2Features.map((feature, index) => (
              <div
                key={index}
                className="group glass-card glass-card-hover rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h4>
                  <p className="font-sans text-xs text-muted-foreground tracking-wide">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 3 */}
        <div className="section-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <span className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-accent">3</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-foreground">
                  Phase 3
                </h3>
                <p className="text-sm text-muted-foreground">AI Vision</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phase3Features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-rajdhani)] text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="font-sans text-sm text-muted-foreground tracking-wide">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 section-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-3xl p-8 md:p-12 text-center">
              <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl md:text-3xl font-bold text-foreground mb-4">
                Building Tomorrow&apos;s <span className="text-gradient">Smart Police Force</span>
              </h3>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide">
                Gujarat Police is committed to leveraging cutting-edge technology to create a safer, 
                more responsive, and intelligent policing ecosystem. Our phased approach ensures 
                systematic implementation with measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
