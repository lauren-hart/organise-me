import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>

      <section id='message-me'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='chat-blurb'>
                <div className='title'><h2>Would you like to chat?</h2></div>

                <p>Send me an email and we can talk.</p>

                <p className='btn-hldr'>
                  <a href='mailto:emilycoco@me.com' className='main-btn email-lnk'>
                    <img className='email-img' src='/icons/email-icon.png' height='20px' />
                    {' '} {' '} message me
                    </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link className='footer-link' to='/email-emily'>hire me</Link>
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
