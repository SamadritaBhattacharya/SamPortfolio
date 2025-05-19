"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react'
import Ballpit from "./ui/Ballpit"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission - could be connected to a server action or API
        console.log("Form submitted:", formData)
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" })
        // Show success message
        alert("Message sent successfully!")
    }

    return (
        <section id="contact" className="py-8 px-6 md:px-12 lg:px-24 bg-[#0a0d16]">
            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Contact</h2>
                    <p className="text-lg text-blue-400 max-w-3xl mx-auto">
                        Let&apos;s connect and discuss how we can work together on your next project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-[#111827] p-6 h-[78vh] rounded-lg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2 text-sm">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full p-1 px-2 rounded bg-[#1e293b] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full p-1 px-2 rounded bg-[#1e293b] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this regarding?"
                                    className="w-full p-1 px-2 rounded bg-[#1e293b] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    rows={6}
                                    className="w-full p-2 rounded bg-[#1e293b] border border-gray-700 text-white placeholder-gray-400 focus:outline-none "
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-[30%] p-1 mx-auto rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-50 [#454c5c] opacity-105 rounded-lg overflow-hidden mb-6">
                            <div className="relative h-58">

                                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '210px', maxHeight: '210px', width: '100%' }}>
                                    <Ballpit
                                        count={120}
                                        gravity={0.5}
                                        friction={0.9790}
                                        wallBounce={0.95}
                                        followCursor={false}
                                        colors={
                                            //[255,1,245]
                                            [0,0,255]
                                        }
                                    />
                                </div>


                                <Image
                  src="/lap1.jpg"
                  alt="Contact wooden blocks"
                  fill
                  className="object-cover -z-50"
                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
                                    <p className="text-sm text-gray-300">Available for remote opportunities worldwide</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-full bg-purple-900/60 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Email</h4>
                                    <a
                                        href="mailto:samadritabhatt163.official@gmail.com"
                                        className="text-gray-300 hover:text-purple-400 transition-colors"
                                    >
                                        samadritabhatt163.official@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-full bg-purple-900/60 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Location</h4>
                                    <p className="text-gray-300">
                                        Kolkata, India <span className="text-purple-400">(Open to Remote Work)</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium mb-4">Connect on Social Media</h4>
                                <div className="flex space-x-4">
                                    <Link
                                        href="https://github.com"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://linkedin.com"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://twitter.com"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://instagram.com"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
