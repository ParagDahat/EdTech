import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Why Us', to: '/whyus' },
   
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full text-xl md:text-2xl  z-50 transition-all duration-300 ${scrolled ? 'bg-[#b4adad]   backdrop-blur-sm py-2' : 'bg-[#c9c2c2]   py-4'} px-6 md:px-12`}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
           <h1 className="md:text-2xl   text-black font-bold">
            <span className="text-red-500">
              Ed
            </span>
            Tech
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden  md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className="text-black  font-lato hover:text-red-600  transition-colors duration-300 "
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/getstarted"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition-colors duration-150"
            >
              Get Started
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Icon */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-black/95 backdrop-blur-sm text-white mt-4 py-4 px-6 flex flex-col space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/getstarted"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors text-center"
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
