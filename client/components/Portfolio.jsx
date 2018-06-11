import React from 'react'

import Works from './Works'

class Portfolio extends React.Component {
  render() {
    return (
      <div className='page-section'>

        <div className='page-heading-section'>
          <div className='page-title'>
            <h2>portfolio</h2>
          </div>
        </div>

        <div className='page-content'>
          <div className='page-content-blurb'>
            <h2>What I've been doing</h2>
            <p>Here is a selection of work I have created during my time at Enspiral Dev Academy and projects I am currently working on.</p>
          </div>
        </div >

        <Works />

      </div>

    )
  }
}
export default Portfolio