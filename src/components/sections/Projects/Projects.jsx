import React from 'react'
import { Carousel } from 'react-bootstrap'
import { projects } from '../../../data/projects'

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Portfolio</span>
            <h2 className="section-title mt-2">Featured <span className="highlight">Projects</span></h2>
            <p className="section-subtitle">A selection of work that reflects my technical range and creative approach.</p>
          </div>
        </div>
        <Carousel id="projectCarousel" interval={6000} indicators={true} controls={true}>
          {projects.map((project) => (
            <Carousel.Item key={project.id}>
              <div className="row g-4 justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="project-card" data-aos="fade-up">
                    <div className="project-img">
                      <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                    <div className="project-body">
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>
                      <div className="btn-group gap-2">
                        <a href={project.codeUrl} className="btn btn-outline-neon" style={{ padding: '4px 18px', fontSize: '0.8rem' }} aria-label="View code on GitHub"><i className="bi bi-github me-1"></i>Code</a>
                        <a href={project.liveUrl} className="btn btn-gradient" style={{ padding: '4px 18px', fontSize: '0.8rem' }} aria-label="View live demo"><i className="bi bi-box-arrow-up-right me-1"></i>Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects 
