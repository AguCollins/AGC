import React from 'react'
import { techStack } from '../../../data/techStack'

const TechStack = () => {
  return (
    <section id="tech-stack" style={{ padding: '60px 0 40px' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Toolbox</span>
            <h2 className="section-title mt-2">Tech <span className="highlight">Stack</span></h2>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3" data-aos="fade-up">
          {techStack.map((item) => (
            <span key={item.id} className="tech-badge"><i className={item.icon}></i> {item.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack 
