import React from 'react'

import Works from './Works'

class Portfolio extends React.Component {
  render() {
    return (
      <div className='page-portfolio'>

        <div className='page-hero-portfolio'>
          <img className='logo-hero' src='/images/hero-portfolio.png' height='100%' background-repeat='repeat' />
        </div>

        <div className='page-content-blurb'>
          <h2>What I've been doing.</h2>
          <p>Here is a selection of work I have created during my time at Enspiral Dev Academy <br /> and projects I am currently working on.</p>
          <p>For more up to date work you can visit my {' '}
            <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
              github
                </a>
            .</p>
        </div >

        <Works />

      </div>

    )
  }
}
export default Portfolio