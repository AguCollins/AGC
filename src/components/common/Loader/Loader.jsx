import React, { useEffect, useState } from 'react'
import './Loader.css'

const Loader = () => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Simulate loading – hide after 800ms (or wait for actual content)
    const timer = setTimeout(() => setHidden(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <div className="loader-ring"></div>
      <div className="loader-text">LOADING</div>
    </div>
  )
}

export default Loader 
