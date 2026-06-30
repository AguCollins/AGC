import React from 'react'
import { Carousel } from 'react-bootstrap'
import { testimonials } from '../../../data/testimonials'

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '60px 0 40px' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Kind Words</span>
            <h2 className="section-title mt-2">Testimonials</h2>
          </div>
        </div>
        <Carousel id="testiCarousel" interval={5000} indicators={true} controls={false}>
          {testimonials.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="testimonial-card" data-aos="fade-up">
                <div className="testi-quote">"{item.quote}"</div>
                <div className="testi-name">— {item.author} <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.9rem' }}>{item.role}</span></div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials 
