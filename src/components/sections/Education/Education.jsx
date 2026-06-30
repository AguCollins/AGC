import React from 'react'
import { education, certifications } from '../../../data/education'

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Learning</span>
            <h2 className="section-title mt-2">Education &amp; <span className="highlight">Certifications</span></h2>
            <p className="section-subtitle">Formal training and credentials that shape my foundation.</p>
          </div>
        </div>
        <div className="row g-4">
          {education.map((item) => (
            <div key={item.id} className="col-md-6" data-aos="fade-right">
              <div className="edu-card">
                <div className="edu-icon"><i className={item.icon}></i></div>
                <h5>{item.title}</h5>
                <div className="edu-meta">{item.institution} · {item.year}</div>
                <div className="mt-2"><span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)' }}>{item.badge}</span></div>
                <div className="text-secondary" style={{ fontSize: '0.9rem' }}>{item.details}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-3 mt-4">
          {certifications.map((cert, idx) => (
            <div key={cert.id} className="col-6 col-md-3" data-aos="zoom-in" data-aos-delay={idx * 50}>
              <div className="cert-card">
                <div className="cert-icon"><i className={cert.icon}></i></div>
                <h6>{cert.title}</h6>
                <small>{cert.subtitle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 
