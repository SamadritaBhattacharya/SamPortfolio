"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left side - Images */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/about.jpg"
                alt="Tech workspace"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 hidden md:block">
              <Image
                src="/about.jpg"
                alt="Code background"
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-lg opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-black/80 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              About
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I&apos;m Samadrita Bhattacharya, a passionate Frontend Developer from India with a keen eye for creating
              elegant, user-centric digital experiences that blend aesthetics with functionality.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Currently pursuing my B.Tech in Computer Science & IT at UEM Kolkata (2022-26), I specialize in building
              modern web applications using React.js, Next.js, and cutting-edge frontend technologies.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <p className="font-medium">B.Tech in Computer Science & IT</p>
                    <p className="text-gray-400">UEM Kolkata (2022-26)</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <p className="font-medium">Class 12 ISC</p>
                    <p className="text-gray-400">90.6%</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <p className="font-medium">Class 10 ICSE</p>
                    <p className="text-gray-400">90%</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </Link>
              <Link
                href="/resume.pdf"
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
