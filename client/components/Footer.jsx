import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className='footer-contact'>
          <h2>Would you like to chat?</h2>
          <p></p>
          <Link to='/email-emily'>
            <button className='contact-button'>message me</button>
          </Link>
        </div>

        <div className='footer-copyright'>
          <p>&copy; emily coco 2018. All right reserved.</p>
        </div>

    </div >
  )
}

export default Footer
