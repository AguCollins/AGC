import React, { useRef, useEffect, useState } from 'react'
import { achievements } from '../../../data/achievements'

const Achievements = () => {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="achievements" ref={sectionRef} style={{ padding: '60px 0 40px' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Milestones</span>
            <h2 className="section-title mt-2">Achievements <span className="highlight">&amp; Impact</span></h2>
          </div>
        </div>
        <div className="row g-4">
          {achievements.map((item, idx) => (
            <div key={item.id} className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={idx * 50}>
              <div className="counter-card">
                <div className="counter-icon"><i className={item.icon}></i></div>
                <div
                  className="counter-number"
                  data-target={item.value}
                  ref={(el) => {
                    if (el && hasAnimated) {
                      const target = parseFloat(el.getAttribute('data-target'))
                      const duration = 1800
                      const startTime = performance.now()
                      const updateCounter = (currentTime) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        const current = eased * target
                        el.textContent = target % 1 === 0 ? Math.round(current) : current.toFixed(2)
                        if (progress < 1) requestAnimationFrame(updateCounter)
                        else el.textContent = target % 1 === 0 ? Math.round(target) : target.toFixed(2)
                      }
                      requestAnimationFrame(updateCounter)
                    }
                  }}
                >
                  0
                </div>
                <div className="counter-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements 
