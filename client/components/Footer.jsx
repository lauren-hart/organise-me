import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-box'>

        <div className='footer-contact'>
          <p>Would you like to chat?</p>
          <Link to='/email-emily'>
            <button className='contact-button'>yes, please!</button>
          </Link>
        </div>

        <div className='footer-copyright'>
          <p>&copy; emily coco 2018. All right reserved.</p>
        </div>

    </div >
  )
}

export default Footer