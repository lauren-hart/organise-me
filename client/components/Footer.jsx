import React from 'react'
import { Link } from 'react-router-dom'

import Contact from './Contact'

const Footer = () => {
  return (
    <div className='footer'>

      <Contact />

      <div className='container-fluid'>

        <footer className='row'>
          <div className='footer justify-content-center'>

            <div className='footer-item'>
              <div className='footer-link' >
                <a href='https://www.linkedin.com/in/emilyparkes/' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src='/icons/linkedin-icon.png' height='40px' />
                </a>
              </div>
            </div>

            <div className='footer-item'>
              <div className='footer-link'>
                <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src='/icons/github-icon.png' height='40px' />
                </a>
              </div>
            </div>


            <div className='footer-item' id='text-link'>
              <a href='mailto:emilycoco@me.com' className='footer-link'>hire me</a>
            </div>

            <div className='footer-item' id='text-link'>
              <Link className='footer-link' to='/resume'>resume</Link>
            </div>

          </div>
        </footer>

        <div className='copyright'>
          © {' '} 2018 {' '}
          <Link className='copyr-link' to='/'>
            emily coco
          </Link>.{' '}All rights reserved.
          </div>

      </div >

    </div>
  )
}

export default Footer
