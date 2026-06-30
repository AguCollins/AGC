import React, { useEffect } from 'react'
import AOS from 'aos'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

import Navigation from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import ScrollProgress from './components/common/ScrollProgress/ScrollProgress'
import BackToTop from './components/common/BackToTop/BackToTop'
import Loader from './components/common/Loader/Loader'

import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Experience from './components/sections/Experience/Experience'
import Projects from './components/sections/Projects/Projects'
import Education from './components/sections/Education/Education'
import TechStack from './components/sections/TechStack/TechStack'
import Achievements from './components/sections/Achievements/Achievements'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Contact from './components/sections/Contact/Contact'

import { useTheme } from './context/ThemeContext'

const App = () => {
  const { theme } = useTheme()

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  // Skill bars animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.progress-bar')
          bars.forEach((bar, index) => {
            const width = parseFloat(bar.getAttribute('data-width')) || 0
            setTimeout(() => {
              bar.style.width = width + '%'
            }, index * 120)
          })
        }
      })
    }, { threshold: 0.3 })

    const skillSection = document.getElementById('skills')
    if (skillSection) observer.observe(skillSection)

    return () => observer.disconnect()
  }, [])

  // ⭐ Cursor glow tracking
  useEffect(() => {
    const glow = document.getElementById('cursor-glow')
    if (!glow) return

    const handleMove = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <Helmet>
        

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Agu Collins Chidera",
            "jobTitle": "Frontend Developer",
            "url": "https://aguchidera.dev",
            "email": "Collinsagu2019@gmail.com",
            "telephone": "+2348058842585",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Enugu State University of Science and Technology"
            },
            "knowsAbout": ["React", "JavaScript", "UI/UX", "HTML", "CSS", "Bootstrap", "Python", "Git"]
          })}
        </script>
      </Helmet>

      {/* ⭐ Cursor glow element */}
      <div id="cursor-glow"></div>

      <Loader />
      <ScrollProgress />
      <BackToTop />
      <Navigation />

      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Education />
      <div className="section-divider"></div>
      <TechStack />
      <div className="section-divider"></div>
      <Achievements />
      <div className="section-divider"></div>
      <Testimonials />
      <div className="section-divider"></div>
      <Contact />

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </>
  )
}

export default App