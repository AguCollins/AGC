import React, { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      id="back-top"
      className={visible ? 'visible' : ''}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="bi bi-chevron-up"></i>
    </button>
  )
}

export default BackToTop 
