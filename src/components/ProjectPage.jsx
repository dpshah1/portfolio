import { useEffect } from 'react'
import Navbar from './Navbar'
import './ProjectDetail.css'

function ProjectPage({ title, summary, meta, links = [], children }) {
  // HashRouter keeps the old scroll offset, so start each project at the top.
  // Braces matter: newer browsers return a Promise from scrollTo, which React would treat as a cleanup function.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main className="container project">
        <h1>{title}</h1>
        <p className="summary">{summary}</p>
        <p className="mono">{meta}</p>
        {links.length > 0 && (
          <p className="links">
            {links.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </p>
        )}
        {children}
      </main>
      <footer className="container footer mono">© {new Date().getFullYear()} Dhruv Shah</footer>
    </>
  )
}

export const img = (name) => `${import.meta.env.BASE_URL}${name}`

export default ProjectPage
