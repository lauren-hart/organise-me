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
                  <img className='icon' src='/icons/linkedin-w.png' height='40px'
                  onMouseOver={e => (e.currentTarget.src = '/icons/linkedin-hover-b.png')}
                  onMouseOut={e => (e.currentTarget.src = '/icons/linkedin-w.png')} />
                </a>
              </div>
            </div>

            <div className='footer-item'>
              <div className='footer-link'>
                <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src='/icons/github-w.png' height='40px'
                  onMouseOver={e => (e.currentTarget.src = '/icons/github-hover-b.png')}
                  onMouseOut={e => (e.currentTarget.src = '/icons/github-w.png')} />
                </a>
              </div>
            </div>


            <div className='footer-item' id='text-link'>
              <a href='mailto:emilycoco@me.com' className='footer-link'>hire me</a>
            </div>

            <div className='footer-item' id='text-link'>
              <a href='https://drive.google.com/file/d/1weePoAGopj7HcO8DEe1mdQ0_hajKnTnE/view?usp=sharing' className='footer-link' target='_blank' rel="noopener noreferrer">
                resume pdf</a>
            </div>

          </div>
        </footer>

        <div className='copyright'>
          © {' '} 2018 {' '}
          <Link to='/'>
            emily coco
          </Link>.{' '}All rights reserved.
          </div>

      </div >

    </div>
  )
}

export default Footer
