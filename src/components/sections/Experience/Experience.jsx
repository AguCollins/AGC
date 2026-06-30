import React from 'react'
import { experience } from '../../../data/experience'

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Career</span>
            <h2 className="section-title mt-2">Professional <span className="highlight">Journey</span></h2>
            <p className="section-subtitle">From engineering floors to frontend — a path of continuous growth.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={item.id} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-org">{item.organization}</div>
                  <div className="timeline-desc">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 
