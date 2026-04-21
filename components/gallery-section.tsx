"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/video/Drone_Surveillance_of_Ahmedabad_Crowd.mp4",
    alt: "Police drone operation",
    category: "Video",
    type: "video"
  },
  {
    id: 2,
    src: "/images/event1.png",
    alt: "Drone surveillance over city",
    category: "Aerial",
    type: "image"
  },
  {
    id: 3,
    src: "/video/Ahmedabad_Smart_City-night-Drone_View.mp4",
    alt: "Ahmedabad-city-night-view",
    category: "Night Vision",
    type: "video"
  },
  {
    id: 4,
    src: "/images/event3.png",
    alt: "Drone technology",
    category: "Technology",
    type: "image"
  },
  {
    id: 5,
    src: "/images/event4.png",
    alt: "City monitoring",
    category: "Surveillance",
    type: "image"
  },
  {
    id: 6,
    src: "/images/news2.png",
    alt: "Training session",
    category: "Training",
    type: "image"
  },
  {
    id: 7,
    src: "/images/news3.png",
    alt: "Control room operations",
    category: "Operations",
    type: "image"
  },
  {
    id: 8,
    src: "/images/news4.png",
    alt: "Traffic monitoring",
    category: "Traffic",
    type: "image"
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null))

  return (
    <section id="gallery" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-accent font-medium">Visual Archive</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Operations <span className="text-gradient">Gallery</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed tracking-wide">
            Visual documentation of drone operations, training sessions, and surveillance capabilities.
          </p>
        </div>

        {/* Dynamic Staggered Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px]">
          {galleryImages.map((item, index) => {
            // Define staggered spans
            let gridClass = "col-span-1 row-span-1"
            if (index === 0) gridClass = "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
            if (index === 2) gridClass = "col-span-2 row-span-1 md:col-span-2 md:row-span-1"
            if (index === 5) gridClass = "col-span-1 row-span-2 md:col-span-1 md:row-span-2"

            return (
              <div
                key={item.id}
                className={`section-fade-in group cursor-pointer ${gridClass}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card transition-all duration-300">
                  {item.type === "video" ? (
                    <div className="w-full h-full relative">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        loop
                        autoPlay
                      />
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="px-3 py-1 text-[10px] uppercase font-bold rounded-full bg-primary text-white tracking-widest">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-bold mt-2 line-clamp-1">{item.alt}</p>
                  </div>

                  {/* Border Glow Hover effect (No Zoom) */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/60 group-hover:shadow-[0_0_20px_rgba(0,230,180,0.2)] transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-2xl">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-foreground hover:bg-muted z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted z-10"
            onClick={() => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null))}
          >
            <ChevronLeft className="w-10 h-10" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted z-10"
            onClick={() => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))}
          >
            <ChevronRight className="w-10 h-10" />
          </Button>

          <div className="max-w-5xl w-full max-h-[85vh] px-16 flex flex-col items-center">
            {galleryImages[selectedImage].type === "video" ? (
              <video
                src={galleryImages[selectedImage].src}
                className="max-h-[70vh] w-auto rounded-2xl shadow-2xl"
                controls
                autoPlay
              />
            ) : (
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            )}
            <div className="mt-8 text-center">
              <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest">
                {galleryImages[selectedImage].category}
              </span>
              <h4 className="text-white text-xl font-bold mt-4 font-[family-name:var(--font-rajdhani)]">{galleryImages[selectedImage].alt}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
