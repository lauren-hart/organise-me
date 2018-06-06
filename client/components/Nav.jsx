import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <nav className='nav justify-content-end flex-column flex-sm-row'>
        <span className='flex-sm-fill text-sm-center nav-link active'>
          <Link to='/about'>about</Link>
        </span>
        <span className='flex-sm-fill text-sm-center nav-link'>
          <Link to='/portfolio'>portfolio</Link>
        </span>
      </nav>
  )
}

export default Nav


{/* <nav class='nav nav-pills flex-column flex-sm-row'>
  <a class='flex-sm-fill text-sm-center nav-link active' href='#'>Active</a>
  <a class='flex-sm-fill text-sm-center nav-link' href='#'>Link</a>
  <a class='flex-sm-fill text-sm-center nav-link' href='#'>Link</a>
  <a class='flex-sm-fill text-sm-center nav-link disabled' href='#'>Disabled</a>
</nav> */}