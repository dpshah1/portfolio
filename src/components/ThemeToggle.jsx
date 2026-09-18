import { useState } from 'react'

// No stored choice means follow the device, so only a click writes to localStorage.
const currentTheme = () =>
  document.documentElement.dataset.theme ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

const sun = <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-13a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM4.2 5.6a1 1 0 0 1 1.4-1.4l1.5 1.4A1 1 0 0 1 5.7 7L4.2 5.6zm12.7 12.7a1 1 0 0 1 1.4-1.4l1.5 1.4a1 1 0 0 1-1.4 1.5l-1.5-1.5zM1 13a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H1zm20 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2zM5.6 19.8a1 1 0 0 1-1.4-1.5l1.5-1.4A1 1 0 0 1 7 18.3l-1.4 1.5zM18.3 7a1 1 0 0 1-1.4-1.4l1.5-1.4a1 1 0 0 1 1.4 1.4L18.3 7z" />
const moon = <path d="M12.3 3a9 9 0 1 0 8.7 11.3 7.5 7.5 0 0 1-8.7-11.3z" />

function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme)

  const next = theme === 'dark' ? 'light' : 'dark'
  const pick = () => {
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Private browsing can block storage; the page still switches for this visit.
    }
  }

  return (
    <button className="theme-toggle" type="button" onClick={pick} title={`Switch to ${next} mode`} aria-label={`Switch to ${next} mode`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{theme === 'dark' ? sun : moon}</svg>
    </button>
  )
}

export default ThemeToggle
