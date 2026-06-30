import React from 'react'
import { useTheme } from '../../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <i className={isLight ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
      <span>{isLight ? 'Light' : 'Dark'}</span>
    </button>
  )
}


export default ThemeToggle 
