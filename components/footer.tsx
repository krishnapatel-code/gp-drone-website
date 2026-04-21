"use client"

import { Shield, Lock, ExternalLink } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Future Vision", href: "#future" },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative py-16 overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Notice */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 md:p-8 border-destructive/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-rajdhani)] text-lg font-bold text-foreground mb-2">
                  Security Notice
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  This platform is intended for <span className="text-foreground font-medium">authorized police and internal government use only</span>. 
                  Unauthorized access, use, or distribution of information from this platform is strictly prohibited 
                  and may result in legal action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-background/50">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-rajdhani)] text-base font-bold text-foreground tracking-wide">
                  GUJARAT POLICE
                </span>
                <span className="text-xs text-muted-foreground tracking-widest">
                  DRONE SURVEILLANCE PLATFORM
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-Powered Drone Surveillance for Smart Policing. Protecting Gujarat with 
              advanced aerial technology and real-time intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-[family-name:var(--font-rajdhani)] text-sm font-bold text-foreground mb-4 tracking-wide">
              QUICK LINKS
            </h5>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-[family-name:var(--font-rajdhani)] text-sm font-bold text-foreground mb-4 tracking-wide">
              OFFICIAL RESOURCES
            </h5>
            <div className="space-y-3">
              <a
                href="https://www.gujaratpolice.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Gujarat Police Official Website
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://ahmedabadcitypolice.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Ahmedabad City Police
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-sm text-muted-foreground">
                Emergency: <span className="text-foreground font-medium">112</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gujarat Police. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              GP-DRASTI Initiative | Drone Response & Surveillance Technology Integration
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
