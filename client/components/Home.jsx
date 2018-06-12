import React from 'react'
// import { Link } from 'react-router-dom'

import About from './About'

class Home extends React.Component {
  render() {
    return (
      <div className='page-section'>

          <div className='page-hero'>
            <img className='logo-hero' src='/images/hero-logo.png' height='100%'/>
          </div>

        <About />

      </div>
    )
  }
}
export default Home