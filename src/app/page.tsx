"use client"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Project from "@/components/Projects"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "@/components/Experience"


export default function Home() {
   useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Hero Section with Background */}
      <div className="min-h-screen flex flex-col relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/portfoliobg.jpg"
            alt="Developer workspace"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-purple-900/40"></div>
        </div>

        {/* Header/Navigation */}
        <header className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Samadrita Bhattacharya
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-purple-400 transition-colors">
              Experience
            </Link>
            <Link href="#achievements" className="hover:text-purple-400 transition-colors">
              Achievements
            </Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I&apos;m Samadrita</h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Crafting exceptional digital experiences with React, Next.js, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </main>

        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
      <ContainerScroll titleComponent=" About Me" >
        <div className="flex flex-col items-center justify-center h-full">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I am a passionate frontend developer with a knack for creating beautiful and functional web applications.
            Currently pursuing my B.Tech in Computer Science & IT at UEM Kolkata (2022-26), I specialize in building
            modern web applications using React.js, Next.js, and cutting-edge frontend technologies.
          </p>   */}
          <AboutSection />
        </div>
      <AboutSection />
      </ ContainerScroll>
      <SkillsSection />
      <Project />
      <Experience />
    </div>
  )
}
