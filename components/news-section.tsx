"use client"

import { Calendar, ArrowUpRight } from "lucide-react"

const newsItems = [
  {
    title: "Drone Deployment Expands to All Ahmedabad Police Stations",
    excerpt: "Gujarat Police announces comprehensive drone coverage across all 33 police zones in Ahmedabad city.",
    date: "March 15, 2024",
    category: "Deployment",
    featured: true,
  },
  {
    title: "AI Drones Successfully Monitor Rath Yatra 2024",
    excerpt: "Over 1 million devotees monitored safely using advanced crowd analysis algorithms during the annual procession.",
    date: "March 10, 2024",
    category: "Operations",
    featured: true,
  },
  {
    title: "Expansion of Surveillance System to Rural Areas",
    excerpt: "New initiative to extend drone surveillance capabilities to district and taluka level operations.",
    date: "March 5, 2024",
    category: "Expansion",
    featured: false,
  },
  {
    title: "New Police Drone Training Programs Launched",
    excerpt: "Advanced certification courses for drone pilots and surveillance operators now available.",
    date: "February 28, 2024",
    category: "Training",
    featured: false,
  },
  {
    title: "Integration with State Emergency Response System",
    excerpt: "Drone surveillance now integrated with Gujarat&apos;s 112 emergency response infrastructure.",
    date: "February 20, 2024",
    category: "Integration",
    featured: false,
  },
  {
    title: "Night Vision Capabilities Enhanced",
    excerpt: "New thermal imaging equipment deployed for improved nighttime surveillance operations.",
    date: "February 15, 2024",
    category: "Technology",
    featured: false,
  },
]

export default function NewsSection() {
  const featuredNews = newsItems.filter((item) => item.featured)
  const regularNews = newsItems.filter((item) => !item.featured)

  return (
    <section id="news" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-accent font-medium">Press Updates</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            News & <span className="text-gradient">Updates</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Stay informed about the latest developments in Gujarat Police drone operations and technology advancements.
          </p>
        </div>

        {/* Featured News - Large Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredNews.map((news, index) => (
            <div
              key={index}
              className="section-fade-in group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full glass-card glass-card-hover rounded-2xl p-6 cursor-pointer transition-all duration-300">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                    {news.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-rajdhani)] text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed tracking-wide text-[15px] mb-4">
                  {news.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Regular News - Smaller Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularNews.map((news, index) => (
            <div
              key={index}
              className="section-fade-in group"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative h-full glass-card glass-card-hover rounded-xl p-4 cursor-pointer transition-all duration-300">
                {/* Category */}
                <span className="text-xs text-primary font-medium">{news.category}</span>

                {/* Title */}
                <h4 className="font-semibold text-foreground mt-2 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>

                {/* Date */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
