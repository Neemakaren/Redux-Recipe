import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaAlignJustify} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/' className="nav-logo">
            <img src="./assets/logo.svg" alt="simply recipes" />
          </Link>
          <button className="nav-btn btn">
            
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          <Link to='/' className="nav-link"> home </Link>
          <Link to='/about' className="nav-link"> about </Link>
          <Link to='/blog' className="nav-link"> blog </Link>
          

          <div className="nav-link contact-link">
            <Link to='/contact' className="btn"> contact </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar