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
                  <img className='icon' src='/icons/w-linkedin.png' height='40px'
                  onMouseOver={e => (e.currentTarget.src = '/icons/hover-b-linkedin.png')}
                  onMouseOut={e => (e.currentTarget.src = '/icons/w-linkedin.png')} />
                </a>
              </div>
            </div>

            <div className='footer-item'>
              <div className='footer-link'>
                <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src='/icons/w-github.png' height='40px'
                  onMouseOver={e => (e.currentTarget.src = '/icons/hover-b-github.png')}
                  onMouseOut={e => (e.currentTarget.src = '/icons/w-github.png')} />
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
