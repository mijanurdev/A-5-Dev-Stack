import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">

      <div className="site-container flex h-20 items-center justify-between gap-3">

        <button
          type="button"
          className="text-xl md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <a href="#home">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="h-8 w-auto max-w-28 sm:max-w-none"
          />
        </a>

        <nav className="hidden gap-5 text-sm font-sans md:flex">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2 text-xs sm:gap-4 sm:text-sm">

          <button
            type="button"
            className="font-semibold"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-3 py-2 font-semibold text-white sm:px-5"
          >
            Sign Up
          </button>

        </div>

      </div>

      {menuOpen && (

        <nav
          className="border-t border-line bg-white p-5 md:hidden"
          onClick={() => setMenuOpen(false)}
        >

          <a href="#home" className="block py-2">Home</a>
          <a href="#technologies" className="block py-2">Technologies</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>

        </nav>

      )}

    </header>
  )
}

export default Navbar