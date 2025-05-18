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
import Navbar from "@/components/common/navbar"
import { motion } from "framer-motion"
import { Router } from "next/router"


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    })
  }, [])
  const navigate = Router.push;

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />
      {/* Hero Section */}

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

        <div className="w-[96%] mx-auto">
          <div className="flex flex-col-reverse md:flex-row-reverse mt-2">

            {/* Right Content */}
            <div className="p-4 " data-aos="flip-right">
              <Image
                src="/dp1.jpg"
                alt="Profile Picture"
                width={400}
                height={200}
                className="rounded-full border-2 border-gray-400 shadow-lg md:mt-8 md:mr-8"
              />

            </div>

            {/* Hero Section */}
            <motion.div
              className="text-white w-full lg:w-[60%] relative z-10 p-1  lg:mt-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 ">
                <div className="max-w-3xl mt-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I&apos;m Samadrita</h1>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                    Frontend Developer
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-xl">
                    Crafting exceptional digital experiences with React, Next.js, and modern web technologies.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-12">

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/")}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      View My Work
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/")}
                      className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
                    >
                      Contact Me
                    </motion.button>
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


            </motion.div>

          </div>

        </div>



        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
      <ContainerScroll titleComponent=" About Me" >
        <div className="flex flex-col items-center justify-center h-full">

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
