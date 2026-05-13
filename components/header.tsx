"use client"

import { useState, useEffect } from "react"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#vision", label: "Vision" },
  { href: "#news", label: "News" },
  { href: "#training", label: "Training" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/30"
          : "bg-background/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/da5v0lev4/image/upload/v1778497017/logo_rfw6jb.png" 
                  alt="Gujarat Police Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-rajdhani)] text-sm md:text-base font-semibold text-foreground tracking-wide">
                  GUJARAT POLICE
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground/80 tracking-widest uppercase">
                  Drone Training Institute
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 px-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="relative group">
                <Button variant="outline" size="sm" className="h-9 px-4 border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-accent hover:text-white text-xs font-semibold cursor-default transition-colors group">
                  Register
                </Button>
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-accent text-[8px] font-bold text-accent-foreground rounded uppercase tracking-tighter">Upcoming</span>
              </div>
              <div className="relative group">
                <Button size="sm" className="h-9 px-4 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 cursor-default">
                  Access Portal
                </Button>
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-accent text-[8px] font-bold text-accent-foreground rounded uppercase tracking-tighter">Upcoming</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-6 py-3 text-left text-muted-foreground hover:text-foreground transition-colors border-b border-border/10 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="px-6 pt-6 pb-2 space-y-4">
              <div className="relative inline-block w-full">
                <Button variant="outline" className="w-full justify-between items-center border-primary/20 bg-primary/5 hover:border-accent hover:text-white cursor-default">
                  Register
                  <span className="px-1.5 py-0.5 bg-accent text-[8px] font-bold text-accent-foreground rounded uppercase tracking-tighter">Upcoming</span>
                </Button>
              </div>
              <div className="relative inline-block w-full">
                <Button className="w-full justify-between items-center bg-primary/10 text-primary border border-primary/20 cursor-default">
                  Access Portal
                  <span className="px-1.5 py-0.5 bg-accent text-[8px] font-bold text-accent-foreground rounded uppercase tracking-tighter">Upcoming</span>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
