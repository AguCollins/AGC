import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { contactInfo } from '../../../data/contactInfo'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    // Replace with actual email sending logic (e.g., EmailJS)
    console.log(data)
    toast.success('Message sent! I\'ll get back to you soon.')
    reset()
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-color)', padding: '6px 18px', borderRadius: '40px', fontWeight: 500, border: '1px solid var(--glass-border)' }}>Connect</span>
            <h2 className="section-title mt-2">Let's <span className="highlight">Work Together</span></h2>
            <p className="section-subtitle">Have a project in mind or just want to say hello? Reach out anytime.</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="glass-card p-4 p-lg-5" style={{ height: '100%' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Get in touch</h4>
              <p className="text-secondary" style={{ fontSize: '0.95rem' }}>I'm currently open to freelance, full‑time, and collaboration opportunities.</p>
              <div className="d-flex flex-column gap-3 mt-4">
                {contactInfo.map((item) => (
                  <a key={item.id} href={item.url} className="contact-info-item" aria-label={item.label}>
                    <div className="ci-icon"><i className={item.icon}></i></div>
                    <div><div className="ci-text">{item.text}</div><div className="ci-label">{item.label}</div></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="100">
            <div className="glass-card p-4 p-lg-5">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '0.85rem' }} htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className={`form-control form-control-custom ${errors.fullName ? 'is-invalid' : ''}`}
                      id="fullName"
                      placeholder="Your name"
                      {...register('fullName', { required: 'Please enter your name.' })}
                    />
                    {errors.fullName && <div className="invalid-feedback" style={{ fontSize: '0.8rem' }}>{errors.fullName.message}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '0.85rem' }} htmlFor="emailAddr">Email Address</label>
                    <input
                      type="email"
                      className={`form-control form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                      id="emailAddr"
                      placeholder="you@example.com"
                      {...register('email', {
                        required: 'Please enter a valid email.',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address.'
                        }
                      })}
                    />
                    {errors.email && <div className="invalid-feedback" style={{ fontSize: '0.8rem' }}>{errors.email.message}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary" style={{ fontSize: '0.85rem' }} htmlFor="subject">Subject</label>
                    <input type="text" className="form-control form-control-custom" id="subject" placeholder="Project inquiry" {...register('subject')} />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary" style={{ fontSize: '0.85rem' }} htmlFor="message">Message</label>
                    <textarea
                      className={`form-control form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      rows="4"
                      placeholder="Tell me about your idea..."
                      {...register('message', { required: 'Please enter a message.' })}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback" style={{ fontSize: '0.8rem' }}>{errors.message.message}</div>}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-gradient w-100"><i className="bi bi-send me-2"></i>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
