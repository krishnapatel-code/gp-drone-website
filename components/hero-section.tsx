"use client"

import { useState, useEffect, useCallback, useRef } from "react"

const carouselImages = [
  {
    url: "https://res.cloudinary.com/da5v0lev4/image/upload/f_auto,q_auto/Ahmedabad-city_soaf5k",
    alt: "AI Drone Surveillance over city",
  },
  {
    url: "https://res.cloudinary.com/da5v0lev4/video/upload/q_auto/f_auto/v1776779631/Ahmedabad_Smart_City-night-Drone_View_uxfsz6.mp4",
    alt: "Ahmedabad-city-night-view",
  },
  // {
  //   url: "/images/gujarat-police-coverage-vision.png",
  //   alt: "Aerial city monitoring",
  // },
  {
    url: "https://res.cloudinary.com/da5v0lev4/video/upload/q_auto/f_auto/v1776833508/Drone_Surveillance_of_Ahmedabad_Crowd_pnuvum.mp4",
    alt: "Police drone operation",
  },

]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
      setIsTransitioning(false)
    }, 500)
  }, [])

  useEffect(() => {
    const currentItem = carouselImages[currentSlide]
    const currentVideo = videoRefs.current[currentSlide]

    if (currentItem.url.endsWith(".mp4")) {
      if (currentVideo) {
        currentVideo.currentTime = 0
        currentVideo.play().catch(() => { })
      }
      return
    }

    const interval = setTimeout(nextSlide, 4000)
    return () => clearTimeout(interval)
  }, [currentSlide, nextSlide])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide
              ? isTransitioning ? "opacity-0" : "opacity-100"
              : "opacity-0"
              }`}
          >
            {image.url.endsWith(".mp4") ? (
              <video
                src={image.url}
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={nextSlide}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
              />
            ) : (
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 180, 255, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(100, 180, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="font-[family-name:var(--font-rajdhani)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
          <span className="text-gradient">Empowering</span>
          <br />
          <span className="text-foreground">
            Smart Policing Through Aerial Innovation</span>
        </h1>

        {/* Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide">
          Gujarat's first DGCA-authorized Police Drone Training Institute. Training certified remote pilots for safer communities.
        </p>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentSlide(index)
                  setIsTransitioning(false)
                }, 300)
              }}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
