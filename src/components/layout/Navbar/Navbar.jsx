import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import ThemeToggle from '../../common/ThemeToggle/ThemeToggle'

const Navigation = () => {
  const [activeId, setActiveId] = useState('hero')

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveId(targetId)
    }
  }

  // Update active link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <Navbar expand="lg" className="navbar-custom fixed-top" id="mainNav">
      <Container>
        <Navbar.Brand href="#hero" className="d-flex align-items-center" onClick={(e) => handleScroll(e, 'hero')}>
          <i className="bi bi-code-square me-2"></i>AGC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navCollapse">
          <i className="bi bi-list" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navCollapse">
          <Nav className="ms-auto align-items-lg-center gap-1">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={activeId === item.id ? 'active' : ''}
              >
                {item.label}
              </Nav.Link>
            ))}
            <li className="nav-item">
              <ThemeToggle />
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation