import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import ParticlesCanvas from './ParticlesCanvas'
import { socialLinks } from '../../../data/socialLinks'
import { useTheme } from '../../../context/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()

  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'React Frontend Developer',
        'UI/UX Enthusiast',
        'Mechanical Engineer turned Coder',
        'Problem Solver',
        'Creative Technologist'
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 300,
      loop: true,
      cursorChar: '_',
    }
    const typed = new Typed(typedRef.current, options)
    return () => typed.destroy()
  }, [])

  // Smooth scroll helper
  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero">
      <ParticlesCanvas />
      <div className="float-shape float-shape-1"></div>
      <div className="float-shape float-shape-2"></div>
      <div className="float-shape float-shape-3"></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center gy-5">
          <div className="col-lg-7" data-aos="fade-up" data-aos-duration="800">
            <div className="mb-3">
              <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '8px 20px', borderRadius: '40px', border: '1px solid var(--glass-border)', fontWeight: 500, letterSpacing: '0.5px' }}>
                <i className="bi bi-robot me-1"></i> Frontend Developer
              </span>
            </div>
            <h1 className="hero-name">
              I'm <span className="gradient-text">Agu Collins</span><br />
              <span style={{ fontSize: '0.7em', fontWeight: 500, color: 'var(--text-secondary)' }}>Chidera</span>
            </h1>
            <div className="hero-typed mb-3">
              <span className="fw-bold" style={{ color: 'var(--text-primary)' }}>&gt; </span>
              <span ref={typedRef}></span>
            </div>
            <p className="hero-desc">
              Frontend developer with a foundation in mechanical &amp; production engineering —
              blending technical precision with creative UI/UX to build performant, human‑centred web experiences.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                href="#contact"
                className="btn btn-gradient"
                onClick={(e) => handleScrollTo(e, 'contact')}
              >
                <i className="bi bi-send me-2"></i>Hire Me
              </a>
              <a
                href="/Agu_Collins_Chidera_CV.pdf"
                download
                className="btn btn-outline-neon"
              >
                <i className="bi bi-download me-2"></i>Download CV
              </a>
            </div>
            <div className="hero-social d-flex gap-3 mt-4">
              {socialLinks.map((item) => (
                <a key={item.id} href={item.url} aria-label={item.label}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ width: '280px', height: '280px', borderRadius: '50%', background: 'var(--gradient-primary)', opacity: 0.06, filter: 'blur(40px)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>
              <div style={{ width: '240px', height: '240px', borderRadius: '50%', border: '2px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', position: 'relative', background: 'var(--bg-card)', backdropFilter: 'blur(8px)', overflow: 'hidden' }}>
                <img
                src={theme === 'dark' ? '/agu.png' : '/agu-dark.png'}
                alt="Agu Collins Chidera"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />

              </div>
              <div style={{ position: 'absolute', bottom: '10px', right: 0, background: 'var(--bg-card)', backdropFilter: 'blur(8px)', border: '1px solid var(--glass-border)', borderRadius: '40px', padding: '8px 20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <i className="bi bi-geo-alt-fill me-1" style={{ color: 'var(--neon-blue)' }}></i> Lagos, NG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero