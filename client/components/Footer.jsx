import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container'>

      <div id='contact-emily' className='footer-contact'>
        <h2>Would you like to chat?</h2>
        <p>Send me an email and we can talk.</p>

          <button className='contact-button'>
            <Link className='email-link' to='/email-emily'>
              <img className='email-img' src='/icons/email-icon.png' height='20px' />
              {' '} {' '} message me
            </Link>
          </button>

      </div>

      <div className='container-fluid'>
        <div className='footer-links'>

          <div className='row' id='one'>
          <span className='footer-link-individual-styling'>
            <a href='https://www.linkedin.com/in/emilyparkes/' target='_blank' rel="noopener noreferrer">
              <img className='icon' src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </span>

          <span className='footer-link-individual-styling'>
            <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
              <img className='icon' src='/icons/github-icon.png' height='40px' />
            </a>
          </span>
          </div>

          <br />

          <div className='row' id='two'>
          <span className='footer-link-individual-styling'>
            {/* link to contact page */}
            <Link to='/email-emily'>hire me
            </Link>
          </span>

          <span className='footer-link-individual-styling'>
            <Link to='/resume'>resume
            </Link>
          </span>
          </div>

        </div>

        <div className='copyright'>
          {' '} 2018 {' '}
          <Link to='/'>
            emily coco
          </Link>.{' '}All rights reserved.
          </div>
      </div>

    </div >
  )
}

export default Footer
