"use client"

import { Shield, ExternalLink, Twitter, Facebook, Youtube, Instagram, Linkedin } from "lucide-react"

const quickLinksLeft = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Establishment", href: "#establishment" },
  { label: "Highlights", href: "#partners" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Programs", href: "#programs" },
]

const quickLinksRight = [
  { label: "Operations", href: "#operations" },
  { label: "Zones", href: "#zones" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#training" },
  { label: "Gallery", href: "#gallery" },
  { label: "Future Roadmap", href: "#roadmap" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* COLUMN 1: Brand */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/da5v0lev4/image/upload/v1778497017/logo_rfw6jb.png"
                  alt="Gujarat Police Logo"
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm text-[#aab3c0] leading-relaxed max-w-sm">
                Empowering law enforcement through specialized drone training. The Gujarat Police
                Drone Training Institute provides professional aerial surveillance expertise.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-[#aab3c0] hover:border-[#00e6b4] hover:text-[#00e6b4] hover:bg-[#00e6b4]/5 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-4">
            <h5 className="font-[family-name:var(--font-rajdhani)] text-[11px] font-bold text-[#00e6b4] mb-8 tracking-[2.5px] uppercase">
              Quick Navigation
            </h5>
            <div className="grid grid-cols-2 gap-x-8">
              {/* Left Column */}
              <div className="flex flex-col gap-3">
                {quickLinksLeft.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[14px] text-[#aab3c0] hover:text-[#00e6b4] transition-all duration-200 text-left hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-3">
                {quickLinksRight.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[14px] text-[#aab3c0] hover:text-[#00e6b4] transition-all duration-200 text-left hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: Official Resources */}
          <div className="md:col-span-4">
            <h5 className="font-[family-name:var(--font-rajdhani)] text-[11px] font-bold text-[#00e6b4] mb-8 tracking-[2.5px] uppercase">
              Official Resources
            </h5>
            <div className="space-y-4 mb-10">
              <a
                href="#"
                title="Link coming soon"
                className="flex items-center gap-2 text-[14px] text-[#aab3c0] hover:text-white transition-all group"
              >
                Gujarat Police Official Website
                <ExternalLink className="w-3.5 h-3.5 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="#"
                title="Link coming soon"
                className="flex items-center gap-2 text-[14px] text-[#aab3c0] hover:text-white transition-all group"
              >
                Ahmedabad City Police
                <ExternalLink className="w-3.5 h-3.5 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Emergency Box */}
            <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-4 group/emergency hover:bg-red-500/10 transition-colors">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[#ff6b6b] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="animate-pulse">🚨</span> Emergency Response
                </span>
                <span className="text-3xl font-bold text-[#ff4444] leading-tight drop-shadow-[0_0_15px_rgba(255,68,68,0.2)]">
                  112
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] w-full" />

        {/* Copyright Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} Gujarat Police. All rights reserved.
          </p>
          <div className="font-[family-name:var(--font-rajdhani)] text-[13px] font-semibold text-white/40 tracking-wider">
            GUJARAT POLICE DRONE TRAINING INSTITUTE
          </div>
        </div>
      </div>

      {/* Security Notice (Very Bottom) */}
      <div className="border-t border-white/[0.03] py-8 px-4 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 rounded-2xl border border-red-500/10 bg-red-500/[0.01]">
            <p className="text-[12px] text-red-500/70 leading-relaxed font-medium">
              <span className="mr-2">🔒</span>
              <span className="font-bold">OFFICIAL NOTICE:</span> This platform is intended for authorized police and internal government use only. 
              Unauthorized access or distribution is strictly prohibited under applicable security laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
