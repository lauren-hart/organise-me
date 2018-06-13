import React from 'react'
// import { Link } from 'react-router-dom'

import About from './About'

class Home extends React.Component {
  render() {
    return (
      <div className='page-home'>

          <div className='page-hero-home'>
            <img className='logo-hero' src='/images/hero-home.png' height='100%'/>
          </div>

        <About />

      </div>
    )
  }
}
export default Home