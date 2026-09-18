import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

function Navbar() {
  return (
    <header className="container navbar">
      <Link className="brand" to="/">Dhruv Shah</Link>
      <nav>
        <Link to="/">← All projects</Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Navbar
