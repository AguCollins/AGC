import React from 'react'
import { skills } from '../../../data/skills'

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Expertise</span>
            <h2 className="section-title mt-2">My <span className="highlight">Tech Stack</span> &amp; Skills</h2>
            <p className="section-subtitle">Tools and technologies I work with to bring ideas to life.</p>
          </div>
        </div>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={skill.id} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="skill-item">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="skill-icon"><i className={skill.icon}></i></div>
                  <div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="text-secondary" style={{ fontSize: '0.8rem' }}>{skill.description}</div>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: 0 }} data-width={skill.progress}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 
