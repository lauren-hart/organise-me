import React from 'react'

class Portfolio extends React.Component {
  render() {
    return (
      <div className='page-section'>

        <div className='page-heading-section'>
          <div className='page-title'>
            <h3>portfolio</h3>
          </div>
        </div>

        <div className='page-content'>
          <div className='image-gallery'>
            <div class='img-row'>
              <div class='img-column'>
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
              </div>

              <div class='img-column'>
              <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
              </div>

              <div class='img-column'>
              <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
                <img src='images/graphic.jpg' />
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Portfolio