import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo justify-content-start'>
        <div className='logo-link' >
          <Link to='/'>
            <img className='logo-img' src='/images/logo.png' />
          </Link>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header
