import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-links'>
        <span className='nav-link-individual-styling'>
          <Link to='/'>home</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/portfolio'>portfolio</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/about'>about</Link>
        </span>
      </div>
    </div>
  )
}

export default Nav