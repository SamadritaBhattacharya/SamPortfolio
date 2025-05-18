"use client"

import { motion } from "framer-motion"
import { Database, Server, Layout } from "lucide-react"
import InfiniteScroll from "./InfiniteScroll"



interface SkillBarProps {
  name: string
  percentage: number
  delay: number
  color: string
}

const SkillBar = ({ name, percentage, delay, color }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

const frontendSkills = [
  { name: "React.js", percentage: 95, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "Next.js", percentage: 90, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "Tailwind CSS", percentage: 95, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "Framer Motion", percentage: 85, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
]

const backendSkills = [
  { name: "Redux", percentage: 85, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { name: "Zustand", percentage: 80, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { name: "Node.js", percentage: 80, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { name: "Express", percentage: 75, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
]

const databaseSkills = [
  { name: "MongoDB", percentage: 85, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { name: "PostgreSQL", percentage: 75, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { name: "Prisma", percentage: 80, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { name: "GitHub", percentage: 90, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
]

// Tech stack for infinite scroll
const techStack1 = [
  { name: "React.js", color: "bg-purple-900 border-purple-500" },
  { name: "Next.js", color: "bg-blue-900 border-blue-500" },
  { name: "Tailwind CSS", color: "bg-cyan-900 border-cyan-500" },
  { name: "Framer Motion", color: "bg-pink-900 border-pink-500" },
  { name: "Redux", color: "bg-indigo-900 border-indigo-500" },
  { name: "Zustand", color: "bg-teal-900 border-teal-500" },
]

const techStack2 = [
  { name: "Node.js", color: "bg-green-900 border-green-500" },
  { name: "Express", color: "bg-gray-900 border-gray-500" },
  { name: "MongoDB", color: "bg-emerald-900 border-emerald-500" },
  { name: "PostgreSQL", color: "bg-blue-900 border-blue-500" },
  { name: "Prisma", color: "bg-purple-900 border-purple-500" },
  { name: "Stripe", color: "bg-indigo-900 border-indigo-500" },
]

const techStack3 = [
  { name: "GitHub", color: "bg-gray-900 border-gray-500" },
  { name: "JavaScript", color: "bg-yellow-900 border-yellow-500" },
  { name: "TypeScript", color: "bg-blue-900 border-blue-500" },
  { name: "Java", color: "bg-red-900 border-red-500" },
  { name: "ShadCN", color: "bg-gray-900 border-gray-500" },
  { name: "Lucide-react", color: "bg-purple-900 border-purple-500" },
]

export default function SkillsSection() {
  return (
    <div data-aos="fade-up">
    <section id="skills" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24 bg-[#0a0d16]">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My technical toolkit includes modern frontend technologies and frameworks that enable me to build
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Frontend Skills */}
          <motion.div
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-2xl shadow-blue-500/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center mr-3">
                <Layout className="text-purple-400" size={20} />
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-2xl shadow-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center mr-3">
                <Server className="text-blue-400" size={20} />
              </div>
              <h3 className="text-xl font-bold">State & Backend</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.3 + index * 0.1}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Database Skills */}
          <motion.div
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-2xl shadow-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-900/50 flex items-center justify-center mr-3">
                <Database className="text-green-400" size={20} />
              </div>
              <h3 className="text-xl font-bold">Database & Tools</h3>
            </div>
            <div className="space-y-4">
              {databaseSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.4 + index * 0.1}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack with Infinite Scroll */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.5, delay: 3.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Tech Stack</h3>
        </motion.div>

        <div className="overflow-hidden">
          <InfiniteScroll items={techStack1} direction="left" speed={4} />
          <InfiniteScroll items={techStack2} direction="right" speed={2} />
          <InfiniteScroll items={techStack3} direction="left" speed={4} />
        </div>
      </div>
    </section>
    </div>
  )
}
