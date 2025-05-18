"use client"

import Image from 'next/image';
import SpotlightCard from './ui/SpotlightCard';

const projects = [
  {
    title: "CaseaDree",
    description:
      "Fullstack ecommerce platform for custom phone case design with seamless payment integration.",
    features: [
      "Custom case design with interactive editor",
      "Secure checkout with Stripe integration",
      "Order tracking and user authentication",
    ],
    image: "/about.jpg", 
    tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
  },
  {
    title: "Alertra – Smart ID Card",
    description:
      "Real-time safety IoT system with geolocation tracking for emergency situations.",
    features: [
      "Real-time location tracking with Raspberry Pi",
      "Emergency alert system with SMS notifications",
      "Research paper published in Microsoft CMT 2025",
    ],
    image: "/about.jpg",
    tech: ["Raspberry Pi", "IoT", "Geolocation", "SMS"],
  },
  {
    title: "LearnSync",
    description:
      "AI-powered learning assistant designed specifically for users with ADHD.",
    features: [
      "Personalized learning paths with AI recommendations",
      "Distraction-free Markdown UI for focused learning",
      "ADHD-friendly features with timed study sessions",
    ],
    image: "/about.jpg",
    tech: ["React", "Node.js", "AI", "Markdown"],
  },
];

export default function Project() {
  return (
    <section className="bg-[#0D1117] text-white py-12 px-4 sm:px-8" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400 mb-10">
          Explore my featured projects showcasing my skills in frontend development,
          fullstack applications, and innovative solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8" data-aos="zoom-in-left">
          {projects.map((project, index) => (
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)" key={index}>
            <div key={index} className="bg-[#161B22] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <ul className="text-sm text-gray-300 mb-4 list-disc list-inside space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-800/40 text-xs px-2 py-1 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
            </SpotlightCard>
          ))}
        </div>

        <button className="mt-10 px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 transition duration-300 text-white text-sm">
          View All Projects on GitHub
        </button>
      </div>
    </section>
  );
}
