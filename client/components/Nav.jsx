import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link className='nav-link active' to='/'>about</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/portfolio'>portfolio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
