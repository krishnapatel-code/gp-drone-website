"use client"

import { Calendar, ArrowUpRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Drone Deployment Expands to All Ahmedabad Police Stations",
    excerpt: "Gujarat Police announces comprehensive drone coverage across all 33 police zones in Ahmedabad city.",
    date: "March 15, 2024",
    category: "Deployment",
    image: "https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/news1_bnwefu",
    featured: true,
    link: "https://insidefpv.com/blogs/blogs/how-gujarat-police-are-using-drones-to-combat-crime"
  },
  {
    id: 2,
    title: "AI Drones Successfully Monitor Rath Yatra 2024",
    excerpt: "Over 1 million devotees monitored safely using advanced crowd analysis algorithms during the annual procession.",
    date: "March 10, 2024",
    category: "Operations",
    image: "https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/news2_tl7mp3",
    featured: true,
    link: "https://deshgujarat.com/2025/06/24/ahmedabad-rath-yatra-2025-over-23000-cops-227-live-cameras-41-drones-2872-body-cameras-to-monitor-security/"
  },
  {
    id: 3,
    title: "Dahod Police Catches Temple Thief Using Live Drone Footage",
    excerpt: "Serial temple thief hiding in farm fields tracked and arrested by Dahod Police using live drone camera after 1km chase through hilly terrain.",
    date: "January 29, 2025",
    category: "operations",
    image: "https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/news3_wy3ytk",
    featured: false,
    link: "https://deshgujarat.com/2025/01/29/dahod-police-nabs-temple-theft-accused-with-help-of-live-drone-footage/"
  },
  {
    id: 4,
    title: "Gujarat Police Use Drone to Nab Stolen Dumper Suspects",
    excerpt: "Live drone footage helped Gujarat Police track and arrest suspects who had abandoned a stolen dumper truck from Chhattisgarh — dramatic chase caught on camera.",
    date: "March 2, 2025",
    category: "Operations",
    image: "https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/news4_vdtuf7",
    featured: false,
    link: "https://www.youtube.com/watch?v=6Fw-WqAzEr4"
  },
  {
    id: 5,
    title: "Drones & AI Deployed for Navratri 2025 Security in Ahmedabad",
    excerpt: "Ahmedabad Police issued strict surveillance guidelines for Navratri 2025 — mandatory CCTV, watchtowers, and drone monitoring at all major garba venues across the city.",
    date: "September 21, 2025",
    category: "Surveillance",
    image: "https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/news5_plnazd",
    featured: false,
    link: "https://deshgujarat.com/2025/09/21/ahmedabad-police-announce-strict-guidelines-and-massive-security-deployment-for-navratri-2025/",
  },
]

export default function NewsSection() {
  const featuredNews = newsItems.filter((item) => item.featured)
  const regularNews = newsItems.filter((item) => !item.featured)

  return (
    <section id="news" className="relative py-20 overflow-hidden bg-[#0a0e1a]">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6">
            <span className="text-sm text-accent font-medium uppercase tracking-wide">Press Updates</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-white">News &</span> <span className="text-gradient">Updates</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide">
            Stay informed about the latest developments in Gujarat Police drone operations and technology advancements.
          </p>
        </div>

        {/* Featured News - Top 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredNews.map((news, index) => (
            <a
              key={news.id}
              href={news.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="section-fade-in group block relative overflow-hidden rounded-[14px] bg-background/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,230,180,0.15)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full h-[180px] overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-[16px] relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-accent/10 text-accent border border-accent/20 uppercase tracking-wider">
                    {news.category}
                  </span>
                  <div className="p-1.5 rounded-full bg-white/5 text-[#aab3c0] group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                  {news.title}
                </h3>
                <p className="font-sans text-[#aab3c0] leading-relaxed tracking-wide text-[15px] mb-6 line-clamp-2">
                  {news.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{news.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Regular News - Bottom 4 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((news, index) => (
            <a
              key={news.id}
              href={news.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="section-fade-in group block relative overflow-hidden rounded-[14px] bg-background/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,230,180,0.15)]"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full h-[180px] overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-[16px] relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-accent/10 text-accent border border-accent/20 uppercase tracking-wider">
                    {news.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#aab3c0] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h4 className="font-semibold text-white mt-2 mb-4 line-clamp-2 group-hover:text-accent transition-colors leading-snug h-[2.8em]">
                  {news.title}
                </h4>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{news.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
