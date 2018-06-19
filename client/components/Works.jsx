import React from 'react'

class Works extends React.Component {
  render() {
    return (
      <div className='page-works'>

        <div id='marama' className='work-shots'>
          <div className='container'>
            <div className='shot'>
              <img className='shot-img' src='images/browser-marama.png' /></div>
            <div className='shot-info'>
              <h2>Mārama</h2>
              <h3>Full Stack Development</h3>
              <p>Mārama is a web app I created as part of a final project at Enspiral Dev Academy (EDA).
                It's purpose is to be a centralised platform for study and funding opportunities available in Aotearoa.
                I worked in a team of six to build Mārama in which we took part in all code of the project.</p>
                <p>Te kete Mārama — to understand, to learn</p>
            </div>
          </div >
        </div >

        <div id='event-app' className='work-shots'>
          <div className='container'>
            <div className='shot'>
              <img className='shot-img' src='images/graphic.jpg' /></div>
            <div className='shot-info'>
              <h2>Event App</h2>
              <h3>Full Stack Development</h3>
              <p>I am currently working on a web and mobile app to see all publically hosted, and locally hosted events within Auckland. It is within early stages but I am excited to practice learning new skills, and building them into this app.</p>
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

      </div>
    )
  }
}

export default Works
