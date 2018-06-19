import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo justify-content-start'>
        <div className='logo-link' >
          <Link to='/'>
            <img className='logo-img' src='/images/logo-bw.png' 
            onMouseOver={e => (e.currentTarget.src = '/images/logo-hover-bw.png')}
            onMouseOut={e => (e.currentTarget.src = '/images/logo-bw.png')} />
          </Link>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header
