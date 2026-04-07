import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isLoading, setIsLoading] = useState(true)

  // System preference detection on initial load (only if no saved preference)
  useEffect(() => {
    // Simulate initial load for animation
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      <CustomCursor />
      <SocialSidebar />
      <AnimatePresence>
        {!isLoading && (
          <motion.div 
            className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
