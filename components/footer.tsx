"use client"

import { Shield, ExternalLink, Twitter, Facebook, Youtube, Instagram, Linkedin } from "lucide-react"

const quickLinksLeft = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Use Cases", href: "#use-cases" },
]

const quickLinksRight = [
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Training", href: "#training" },
  { label: "Future Vision", href: "#vision" },
  { label: "About", href: "#about" },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/dgpgujaratofficial" },
  { icon: Instagram, href: "https://www.instagram.com/gujaratpolice_/" },
  { icon: Twitter, href: "https://x.com/gujaratpolice" },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-[#080c14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-[60px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-[40px]">
          
          {/* COLUMN 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-primary/40 bg-background/30">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-rajdhani)] text-base font-bold text-foreground tracking-wide leading-tight">
                  GUJARAT POLICE
                </span>
                <span className="text-[10px] text-muted-foreground/80 tracking-[0.2em] font-semibold uppercase leading-tight">
                  Drone Surveillance Platform
                </span>
              </div>
            </div>
            <p className="text-sm text-[#aab3c0] leading-relaxed max-w-sm">
              AI-Powered Drone Surveillance for Smart Policing. Protecting Gujarat with 
              advanced aerial technology and real-time intelligence.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-[10px]">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] border border-white/12 text-[#aab3c0] hover:border-[#00e6b4] hover:text-[#00e6b4] transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="md:pl-12">
            <h5 className="font-[family-name:var(--font-rajdhani)] text-[11px] font-bold text-[#00e6b4] mb-6 tracking-[2px] uppercase">
              Quick Links
            </h5>
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-12">
              {/* Left Column */}
              <div className="flex flex-col gap-[10px]">
                {quickLinksLeft.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[14px] text-[#aab3c0] hover:text-white hover:pl-1 transition-all duration-200 text-left whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-[10px]">
                {quickLinksRight.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[14px] text-[#aab3c0] hover:text-white hover:pl-1 transition-all duration-200 text-left whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: Official Resources */}
          <div>
            <h5 className="font-[family-name:var(--font-rajdhani)] text-[11px] font-bold text-[#00e6b4] mb-6 tracking-[2px] uppercase">
              Official Resources
            </h5>
            <div className="space-y-4 mb-8">
              <a
                href="#"
                title="Link coming soon"
                className="flex items-center gap-2 text-[14px] text-[#aab3c0] hover:text-white transition-colors group"
              >
                Gujarat Police Official Website
                <ExternalLink className="w-3 h-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#"
                title="Link coming soon"
                className="flex items-center gap-2 text-[14px] text-[#aab3c0] hover:text-white transition-colors group"
              >
                Ahmedabad City Police
                <ExternalLink className="w-3 h-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Emergency Box */}
            <div className="border border-red-500/30 bg-red-500/5 rounded-[10px] p-[12px] px-[16px]">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[#ff6b6b] uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span className="animate-pulse">🚨</span> Emergency Contact
                </span>
                <span className="text-[22px] font-bold text-[#ff4444] leading-tight">
                  112
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.07] w-full" />

        {/* Copyright Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/35">
            © {new Date().getFullYear()} Gujarat Police. All rights reserved.
          </p>
          <p className="text-[13px] text-white/35">
            Drone Response & Surveillance Technology Integration
          </p>
        </div>
      </div>

      {/* Security Notice (Very Bottom) */}
      <div className="border-t border-white/[0.05] py-6 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 rounded-xl border border-red-500/20 bg-red-500/[0.02]">
            <p className="text-[12px] text-red-500/90 leading-relaxed font-medium">
              <span className="mr-2">🔒</span>
              <span className="font-bold">ATTENTION:</span> This platform is intended for authorized police and internal government use only. 
              Unauthorized access, use, or distribution of information is strictly prohibited 
              and may result in legal action.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
