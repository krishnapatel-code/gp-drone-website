"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EstablishmentSection from "@/components/establishment-section"
import CapabilitiesSection from "@/components/capabilities-section"
import TrainingPartners from "@/components/trainingpartners"
import OperationsSection from "@/components/operations-section"
import ZoneSection from "@/components/zone-section"
import NewsSection from "@/components/news-section"
import EventsSection from "@/components/events-section"
import TrainingProgramsTable from "@/components/trainingprogramstable"
import GallerySection from "@/components/gallery-section"
import FutureVisionSection from "@/components/future-vision-section"
import Footer from "@/components/footer"

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const sections = document.querySelectorAll(".section-fade-in")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <EstablishmentSection />
      <TrainingPartners />
      <CapabilitiesSection />
      <TrainingProgramsTable />
      <OperationsSection />
      <ZoneSection />
      <NewsSection />
      <EventsSection />
      <GallerySection />
      <FutureVisionSection />
      <Footer />
    </main>
  )
}
