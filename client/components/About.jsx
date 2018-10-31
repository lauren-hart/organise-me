import React from 'react'

import Hobbies from './Hobbies'

class About extends React.Component {
  render () {
    return (
      <div className="about">
        <div className="row">
          <div className="col-md-6">
            <h5 className="about-h5">about me</h5>
            <p className="about-p">I am full stack web developer. <br /> I have a strong commercial
          background as a chartered accountant. < br />
          I have a love for using technology to automate and solve
          everyday tasks and problems. < br />
          I am looking for a role that will challenge me and enable
          me to learn every day, <br /> where I can see that the input
          I'm giving is making an impact on users. < br />
          I want to be part of a team that's proud of their work.< br />
            </p>
          </div>
          <div className="col-md-6">
            <Hobbies />
          </div>
        </div>
      </div>
    )
  }
}
export default About
