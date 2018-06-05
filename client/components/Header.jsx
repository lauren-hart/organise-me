import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <div className='header-content'>
      <div className='logo'>
        <Link to='/'>
          <img src='/images/logo.png' className='logo' />
        </Link>
      </div>
        <Nav />
      </div>
      )
    }
    
export default Header
