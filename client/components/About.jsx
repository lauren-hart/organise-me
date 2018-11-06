import React from 'react'

import Hobbies from './Hobbies'

class About extends React.Component {
  render () {
    return (
      <div className="about">
        <div className="col-md-6">
          <h5 className="about-h5">about me</h5>
          <p className="about-p">
                  I have recently graduated from <br />
            <a href="https://devacademy.co.nz/" className="contact-link">Enspiral Dev Academy</a>
            .<br />
                  I have a strong commercial
                  background as a chartered accountant, but
                  I promise I am not as boring as I sound! <br />
                  I have a love for using technology to automate and solve
                  everyday tasks and problems. < br />
                  I am looking for a role that will challenge me <br /> and enable
                  me to learn every day,  where I can see that the input
                  I'm giving is making an impact on users. < br />
                  I want to be part of a team that's proud of their work.< br />
            <a className="a-cv" href="https://github.com/lauren-hart/CV-and-Bio/blob/master/Resume.pdf"><h5 className="cv">download my CV</h5></a>

          </p>
        </div>
        <div className="col-md-6">
          <Hobbies />
        </div>
      </div>
    )
  }
}
export default About
