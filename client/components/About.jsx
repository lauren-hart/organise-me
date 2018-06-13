import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className='page-about'>

        <div className='about-blurb'>
          <h2>Hello!</h2>
          <p>
            I'm a web developer based in Auckland, New Zealand. <br/>
            I love to create with code, and learning to broaden my skill set.
            </p>
        </div>

        <div className='experience-blurb'>
          <h3>A little about my experience,</h3>
          <p className='exp-1'>I have always loved being able to create projects hands on and found tech and code to be an exciting and rewarding way of doing so.</p>
          <p>I pursued my interest in code at Enspiral Dev Academy and graduated as a full stack developer in March 2018.</p>
        </div>

      </div>
    )
  }
}
export default About