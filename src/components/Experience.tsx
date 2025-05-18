import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, DollarSign, Laptop, Users } from 'lucide-react';

const experiences = [
    {
    title: "Frontend Developer",
    company: "Diamond Hands LLP - Trade021",
    date: "May 2025 — Present",
    points: [
      "Developing responsive web applications and implementing modern UI/UX designs for client projects.",
      "Built interactive components with React.js and Tailwind CSS.",
      "Engineered responsive design using linked collaboration tools.",
      "Collaborated with design team to create innovative user experiences."
    ],
    icon: <DollarSign size={24} />,
    iconBg: "bg-purple-600",
    tags: ["React.js", "Tailwind CSS", "UI/UX"]
  },
  {
    title: "Fullstack Developer Intern",
    company: "Rad Media Solutions",
    date: "2024 — Present",
    points: [
      "Developing responsive web applications and implementing modern UI/UX designs for client projects.",
      "Built interactive components with React.js and Tailwind CSS.",
      "Engineered responsive design using linked collaboration tools.",
      "Collaborated with design team to create innovative user experiences."
    ],
    icon: <Briefcase size={24} />,
    iconBg: "bg-purple-600",
    tags: ["React.js", "Tailwind CSS", "UI/UX"]
  },
  {
    title: "UI/UX Developer Intern",
    company: "RIDE EVEE",
    date: "2023 — 2024",
    points: [
      "Designed and developed user interfaces for an electric vehicle ride-sharing platform.",
      "Created responsive UI components for mobile and web applications.",
      "Optimized application performance and loading speed.",
      "Implemented user authentication and booking functionality."
    ],
    icon: <Laptop size={24} />,
    iconBg: "bg-pink-600",
    tags: ["Internship", "Figma", "UI/UX"]
  },
  {
    title: "Freelance Developer",
    company: "Various Clients",
    date: "2022 — 2023",
    points: [
      "Developed custom websites and web applications for small businesses and startups.",
      "Built responsive websites with modern technologies.",
      "Integrated APIs, e-commerce solutions and CMS platforms.",
      "Provided ongoing maintenance and support."
    ],
    icon: <Users size={24} />,
    iconBg: "bg-purple-600",
    tags: ["Freelance", "Next.js", "Responsive Design"]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8 bg-[#0f172a] text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2">Experience</h2>
      <p className="text-slate-400 text-center tracking-tight mb-12">
        My professional journey in frontend development and tech innovation.
      </p>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0f172a', color: '#fff', border: '1px solid #334155' }}
            contentArrowStyle={{ borderRight: '7px solid #334155' }}
            date={exp.date}
            iconStyle={{ background: exp.iconBg, color: '#fff' }}
            icon={exp.icon}
          >
            <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
            <h4 className="text-sm text-rose-400 font-medium mb-2">{exp.company}</h4>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#1e293b] text-xs text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <button className="mt-12 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition-all">
        📄 Download Resume
      </button>
    </div>
  );
}
