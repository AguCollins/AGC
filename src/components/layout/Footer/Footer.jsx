import React from 'react'
import { socialLinks } from '../../../data/socialLinks'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-6 text-center text-md-start">
            <div className="footer-copy">
			  &copy; 2026 <span style={{ color: 'var(--neon-blue)' }}>Agu Collins Chidera</span>.
			  Crafted with <i className="bi bi-code-slash" style={{ color: 'var(--neon-blue)' }}></i> using React & Bootstrap
			</div>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-social d-flex justify-content-center justify-content-md-end gap-2">
              {socialLinks.map((item) => (
                <a key={item.id} href={item.url} aria-label={item.label}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
