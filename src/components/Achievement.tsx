"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface AchievementCardProps {
  category: string
  categoryColor: string
  title: string
  description: string
  tags: { name: string; color: string }[]
  imageSrc: string
  delay: number
}

const AchievementCard = ({
  category,
  categoryColor,
  title,
  description,
  tags,
  imageSrc,
  delay,
}: AchievementCardProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}>{category}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className={`px-2 py-1 rounded text-xs font-medium ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const achievements = [
  {
    category: "HACKATHON",
    categoryColor: "bg-purple-600",
    title: "HackByte 3.0 @ IIIT Jabalpur",
    description: "2nd Runner-Up with additional MongoDB Prize and MLH Winner recognition.",
    tags: [
      { name: "Innovation", color: "bg-blue-600" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "MLH", color: "bg-purple-600" },
    ],
    imageSrc: "/lap1.jpg?height=600&width=800",
  },
  {
    category: "RESEARCH",
    categoryColor: "bg-blue-600",
    title: "Research Paper (Alertra)",
    description: "Published in Microsoft CMT 2025, focusing on IoT-based safety systems.",
    tags: [
      { name: "IoT", color: "bg-red-600" },
      { name: "Microsoft", color: "bg-blue-600" },
      { name: "Publication", color: "bg-yellow-600" },
    ],
    imageSrc: "/lap1.jpg?height=600&width=800",
  },
  {
    category: "EXPERIENCE",
    categoryColor: "bg-pink-600",
    title: "National Hackathons",
    description: "Participated in 6+ national hackathons with event anchoring experience.",
    tags: [
      { name: "Teamwork", color: "bg-blue-600" },
      { name: "Leadership", color: "bg-green-600" },
      { name: "Public Speaking", color: "bg-orange-600" },
    ],
    imageSrc: "/lap1.jpg?height=600&width=800",
  },
]

export default function Achievement() {
  return (
    <section id="achievements" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Recognitions and accomplishments that showcase my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[96%] lg:w-full mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              category={achievement.category}
              categoryColor={achievement.categoryColor}
              title={achievement.title}
              description={achievement.description}
              tags={achievement.tags}
              imageSrc={achievement.imageSrc}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
