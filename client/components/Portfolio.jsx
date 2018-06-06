import React from 'react'

class Portfolio extends React.Component {
  render() {
    return (
      <div className='portfolio'>

        <div className='page-heading-section'>
          <div className='page-title'>
            <h3>portfolio</h3>
          </div>
        </div>

        <div className='page-content'>

          <div id='marama' className='work-shots'>
            <div className='container'>
              <div className='shot'>
                <img className='shot-img' src='images/marama-darkest.png' /></div>
              <div className='shot-info'>
                <h2>Mārama</h2>
                <h3>Full Stack Development</h3>
                <p>Mārama is a web app I created as part of a final project at EDA. It's purpose is to ....</p>
              </div>
            </div >
          </div >

          <div id='work2' className='work-shots'>
            <div className='container'>
              <div className='shot'>
                <img className='shot-img' src='images/graphic.jpg' /></div>
              <div className='shot-info'>
                <h2>Work 2</h2>
                <h3>Full Stack Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut blandit nunc. Donec at enim tortor. Nullam ultricies porttitor velit, eget feugiat neque tempus eu. Vestibulum euismod consectetur magna. Vestibulum enim massa, accumsan et hendrerit sit amet, elementum nec urna. Nam vestibulum rhoncus orci, quis congue justo tempor sit amet. Vivamus egestas quam non congue pellentesque. Mauris in egestas urna. Phasellus velit quam, facilisis vitae enim ac, vestibulum suscipit enim.</p>
              </div>
            </div >
          </div >

          <div id='work3' className='work-shots'>
            <div className='container'>
              <div className='shot'>
                <img className='shot-img' src='images/graphic.jpg' /></div>
              <div className='shot-info'>
                <h2>Work 3</h2>
                <h3>Full Stack Development</h3>
                <p>Fusce turpis tortor, tincidunt eget dictum vel, ullamcorper id nunc. Etiam vestibulum ullamcorper euismod. Suspendisse sed lacus at nunc consectetur rhoncus vitae ac lacus. Pellentesque quis laoreet augue. Nulla eget imperdiet magna. Curabitur efficitur semper enim eget ultrices. Vivamus risus neque, pretium id egestas eu, consequat vitae purus. Aliquam ut leo vel neque viverra finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras id metus ex.</p>
              </div>
            </div >
          </div >

          {/* END-page-content */}
        </div >

        {/* END-portfolio */}
      </div>

    )
  }
}
export default Portfolio