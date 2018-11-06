import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Stack from './Stack'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      about: false,
      exp: false,
      projects: false
    }
  }

  render () {
    return (
      <div>
        <header className="header">
          <h1 className="name-h1">Lauren Hart</h1>
          <h5 className="title-h5">full stack developer</h5>
          <div className="row">
            <div className="links">
              <a href="mailto:laurenannehart@gmail.com" className="fa fa-envelope"></a>
              <a href="https://github.com/lauren-hart" className="fa fa-github"></a>
              <a href="https://www.linkedin.com/in/lauren-hart-01551620/" className="fa fa-linkedin"></a>
            </div>
          </div>

          <div className="nav row">
            <div className="col-md-4 about-nav nav-box">
              <Link to="/"><button className="nav-button">home</button></Link>

            </div>
            <div className="col-md-4 contact-nav nav-box">
              <Link to="/contact"><button className="nav-button">contact</button></Link>
            </div>
            <div className="col-md-4 projects-nav nav-box">
              <Link to="/projects"><button className="nav-button">projects</button></Link>
            </div>
          </div>
        </header>

        <About />
        <Stack />
        <Experience />

      </div>

    )
  }
}
export default Home
