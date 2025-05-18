import Link from "next/link"

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar