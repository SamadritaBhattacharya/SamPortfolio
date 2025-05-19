// // import CircularGallery from "./ui/CircularGallery"


// // const Achievement = () => {
// //     const items = [
// //         { image: "/about.jpg", text: "First" },
// //         { image: "/about.jpg", text:"Second" },
// //         { image: "/about.jpg", text: "Third" },
// //     ];

// //     return (
// //         <div className=" min-h-screen">
// //             <div className="flex items-center justify-center py-2 lg:mt-4 text-xl lg:text-5xl font-bold"> Achievements</div>

// //             <div>
// //                 <div style={{ height: '200', position: 'relative' }}>
// //                     <CircularGallery
// //                         items={items}
// //                         bend={5.5}
// //                         borderRadius={0.1}
// //                     />
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Achievement





















// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import { Lightbulb, MessageSquare, Users, RefreshCw } from "lucide-react"
// import CircularGallery from "./ui/CircularGallery"


// interface SkillCardProps {
//   icon: React.ReactNode
//   title: string
//   description: string
//   color: string
//   delay: number
// }

// const SkillCard = ({ icon, title, description, color, delay }: SkillCardProps) => {
//   return (
//     <motion.div
//       className="bg-[#0a0d16] p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       viewport={{ once: true }}
//     >
//       <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4`}>{icon}</div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-gray-400 text-sm">{description}</p>
//     </motion.div>
//   )
// }

// interface StatCardProps {
//   number: string
//   label: string
//   color: string
//   delay: number
// }

// const StatCard = ({ number, label, color, delay }: StatCardProps) => {
//   return (
//     <motion.div
//       className={`${color} p-6 rounded-lg flex flex-col items-center text-center`}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       viewport={{ once: true }}
//     >
//       <h3 className="text-4xl font-bold mb-1">{number}</h3>
//       <p className="text-gray-200">{label}</p>
//     </motion.div>
//   )
// }

// const softSkills = [
//   {
//     icon: <Lightbulb className="text-white" size={24} />,
//     title: "Problem Solving",
//     description: "Creative solutions to complex technical challenges",
//     color: "bg-purple-600",
//   },
//   {
//     icon: <MessageSquare className="text-white" size={24} />,
//     title: "Communication",
//     description: "Clear and effective technical and team communication",
//     color: "bg-blue-600",
//   },
//   {
//     icon: <Users className="text-white" size={24} />,
//     title: "Teamwork",
//     description: "Collaborative approach to project development",
//     color: "bg-green-600",
//   },
//   {
//     icon: <RefreshCw className="text-white" size={24} />,
//     title: "Adaptability",
//     description: "Quick learning and adaptation to new technologies",
//     color: "bg-orange-600",
//   },
// ]

// const stats = [
//   {
//     number: "6+",
//     label: "Hackathons",
//     color: "bg-purple-900/60",
//   },
//   {
//     number: "1",
//     label: "Research Paper",
//     color: "bg-blue-900/60",
//   },
//   {
//     number: "3",
//     label: "Major Projects",
//     color: "bg-green-900/60",
//   },
//   {
//     number: "90%+",
//     label: "Academic Score",
//     color: "bg-amber-900/60",
//   },
// ]

// // Gallery items for the circular gallery
// const galleryItems = [
//   { image: "/about.jpg?height=400&width=400", text: "Problem Solving" },
//   { image: "/about.jpg?height=400&width=400", text: "Communication" },
//   { image: "/about.jpg?height=400&width=400", text: "Teamwork" },
//   { image: "/lap1.jpg?height=400&width=400", text: "Adaptability" },
//   { image: "/about.jpg?height=400&width=400", text: "Leadership" },
//   { image: "/lap1.jpg?height=400&width=400", text: "Time Management" },
// ]

// export default function SoftSkillsSection() {
//   return (
//     <section id="soft-skills" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24 bg-black">
//       <div className="w-full max-w-7xl mx-auto">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Soft Skills</h2>
//         </motion.div>

//         {/* Skills Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {softSkills.map((skill, index) => (
//             <SkillCard
//               key={index}
//               icon={skill.icon}
//               title={skill.title}
//               description={skill.description}
//               color={skill.color}
//               delay={0.2 + index * 0.1}
//             />
//           ))}
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <StatCard
//               key={index}
//               number={stat.number}
//               label={stat.label}
//               color={stat.color}
//               delay={0.4 + index * 0.1}
//             />
//           ))}
//         </div>

//         {/* Circular Gallery */}
//         <motion.div
//           className="h-[400px] mt-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <CircularGallery
//             items={galleryItems}
//             bend={3}
//             textColor="#ffffff"
//             borderRadius={0.05}
//             font="bold 24px DM Sans"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }







"use client"

import React from "react"
import { motion } from "framer-motion"
import CircularGallery from "./ui/CircularGallery"

const stats = [
  {
    number: "6+",
    label: "Hackathons",
    color: "bg-purple-900/60",
  },
  {
    number: "1",
    label: "Research Paper",
    color: "bg-blue-900/60",
  },
  {
    number: "3",
    label: "Major Projects",
    color: "bg-green-900/60",
  },
  {
    number: "90%+",
    label: "Academic Score",
    color: "bg-amber-900/60",
  },
]

// Updated Gallery items from soft skills
const galleryItems = [
  { image: "/about.jpg?height=400&width=400", text: "Problem Solving" },
  { image: "/about.jpg?height=400&width=400", text: "Communication" },
  { image: "/about.jpg?height=400&width=400", text: "Teamwork" },
  { image: "/lap1.jpg?height=400&width=400", text: "Adaptability" },
  { image: "/about.jpg?height=400&width=400", text: "Leadership" },
  { image: "/lap1.jpg?height=400&width=400", text: "Time Management" },
]

interface StatCardProps {
  number: string
  label: string
  color: string
  delay: number
}

const StatCard = ({ number, label, color, delay }: StatCardProps) => {
  return (
    <motion.div
      className={`${color} p-6 rounded-lg flex flex-col items-center text-center`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold mb-1">{number}</h3>
      <p className="text-gray-200">{label}</p>
    </motion.div>
  )
}

export default function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Soft Skills</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Here's a visual representation of my core interpersonal and professional skills.
          </p>
        </motion.div>

        {/* Circular Gallery */}
        <motion.div
          className="h-[400px] mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 24px DM Sans"
          />
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              color={stat.color}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
