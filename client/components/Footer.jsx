import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>

      <div id='contact-emily' className='footer-contact'>
        <h2>Would you like to chat?</h2>
        <p>Send me an email and we can talk.</p>
        <Link to='/email-emily'>
          <button className='contact-button'>message me</button>
        </Link>
      </div>

      <div className='footer-colour-block'>
        <div className='footer-links'>

          <div className='row' id='one'>
          <span className='footer-link-individual-styling'>
            <a href='https://www.linkedin.com/in/emilyparkes/' target='_blank' rel="noopener noreferrer">
              <img className='icon' src='/images/linkedin-icon.png' height='40px' />
            </a>
          </span>

          <span className='footer-link-individual-styling'>
            <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
              <img className='icon' src='/images/github-icon.png' height='40px' />
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
          &copy; 2018&nbsp;
          <Link to='/'>
            emily coco
          </Link>.&nbsp;All rights reserved.
          </div>
      </div>

    </div >
  )
}

export default Footer
