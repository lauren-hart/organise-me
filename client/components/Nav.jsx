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


{/* <nav class='nav nav-pills flex-column flex-sm-row'>
  <a class='flex-sm-fill text-sm-center nav-link active' href='#'>Active</a>
  <a class='flex-sm-fill text-sm-center nav-link' href='#'>Link</a>
  <a class='flex-sm-fill text-sm-center nav-link' href='#'>Link</a>
  <a class='flex-sm-fill text-sm-center nav-link disabled' href='#'>Disabled</a>
</nav> */}