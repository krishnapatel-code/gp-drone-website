"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    alt: "Drone surveillance over city",
    category: "Aerial",
  },
  {
    src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
    alt: "Drone in flight",
    category: "Operations",
  },
  {
    src: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80",
    alt: "Drone technology",
    category: "Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    alt: "City monitoring",
    category: "Surveillance",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    alt: "Training session",
    category: "Training",
  },
  {
    src: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&q=80",
    alt: "Control room operations",
    category: "Operations",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain surveillance",
    category: "Aerial",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    alt: "Traffic monitoring",
    category: "Traffic",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null))
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null))

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-accent font-medium">Visual Archive</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Operations <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Visual documentation of drone operations, training sessions, and surveillance capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 section-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`section-fade-in group cursor-pointer ${
                index % 5 === 0 ? "row-span-2" : ""
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-full min-h-[200px] rounded-xl overflow-hidden glass-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                    {image.category}
                  </span>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground hover:bg-muted z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted z-10"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted z-10"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                {filteredImages[selectedImage].category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
