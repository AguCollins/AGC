import React from 'react'

const About = () => {
  const gradYear = 2019
  const currentYear = new Date().getFullYear()
  const yearsExp = Math.max(0, currentYear - gradYear)

  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>About Me</span>
            <h2 className="section-title mt-2">Engineering <span className="highlight">Mindset</span>, Developer <span className="highlight">Craft</span></h2>
            <p className="section-subtitle">Bridging the gap between systems thinking and pixel‑perfect interfaces.</p>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="glass-card p-4 p-lg-5" style={{ height: '100%' }}>
              <p className="about-text">
                I'm <span className="about-highlight">Agu Collins Chidera</span> — a frontend developer with a
                B.Eng. in Mechanical and Production Engineering from ESUT. My engineering background trained me
                to think in systems, optimise workflows, and obsess over efficiency — qualities I now pour into
                building <span className="about-highlight">clean, responsive, and accessible</span> web applications.
              </p>
              <p className="about-text mt-3">
                I specialise in <span className="about-highlight">React</span>, modern JavaScript, and component‑driven
                architecture, but my toolkit also spans Python, MATLAB, and AutoCAD — a blend that lets me approach
                frontend challenges with a uniquely analytical lens.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div><i className="bi bi-check-circle-fill" style={{ color: 'var(--neon-blue)' }}></i> <span className="text-secondary">Lean &amp; Agile</span></div>
                <div><i className="bi bi-check-circle-fill" style={{ color: 'var(--neon-blue)' }}></i> <span className="text-secondary">UI/UX Design</span></div>
                <div><i className="bi bi-check-circle-fill" style={{ color: 'var(--neon-blue)' }}></i> <span className="text-secondary">Systems Thinking</span></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="row g-3">
              <div className="col-6">
                <div className="glass-card p-4 text-center">
                  <div style={{ fontSize: '2.4rem', fontWeight: 700, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-display)' }}>{yearsExp}+</div>
                  <div className="text-secondary" style={{ fontSize: '0.9rem' }}>Years of Coding</div>
                </div>
              </div>
              <div className="col-6">
                <div className="glass-card p-4 text-center">
                  <div style={{ fontSize: '2.4rem', fontWeight: 700, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-display)' }}>8+</div>
                  <div className="text-secondary" style={{ fontSize: '0.9rem' }}>Projects Delivered</div>
                </div>
              </div>
              <div className="col-12">
                <div className="glass-card p-4">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-award-fill" style={{ fontSize: '2rem', color: 'var(--neon-blue)' }}></i>
                    <div>
                      <div style={{ fontWeight: 600 }}>Co‑Author — International Journal</div>
                      <div className="text-secondary" style={{ fontSize: '0.85rem' }}>"Development and Performance Evaluation of a Plastic and Biomass Torrefaction Machine" (2024)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
