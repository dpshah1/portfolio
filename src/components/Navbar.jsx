import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="container navbar">
      <Link className="brand" to="/">Dhruv Shah</Link>
      <nav>
        <Link to="/">← All projects</Link>
      </nav>
    </header>
  )
}

export default Navbar
