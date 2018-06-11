import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo justify-content-start'>
        <div className='logo-link' >
          <Link to='/'>
            <img className='logo-img' src='/images/bw-logo.png' 
            onMouseOver={e => (e.currentTarget.src = '/images/hover-bw-logo.png')}
            onMouseOut={e => (e.currentTarget.src = '/images/bw-logo.png')} />
          </Link>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header
