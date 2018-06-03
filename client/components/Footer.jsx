import React from 'react'

import Contact from './Contact'

const Footer = () => {
  return (
    <div className='footer-box'>

      <div classname='footer-content'>
        <Contact />
      </div>

      <div className='footer-copyright'>
        <p>&copy; emily coco 2018. All right reserved.</p>
      </div>

    </div>
  )
}

export default Footer