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
            <p>Here is a selection of work I have created</p>
            <p>and also</p>
            <p>side projects I am currently working on.</p>
          </div>
        </div >

          <Works />

      </div>

    )
  }
}
export default Portfolio