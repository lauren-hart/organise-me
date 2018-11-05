import React from 'react'
import {Link} from 'react-router-dom'

class Contact extends React.Component {
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
              <Link to="/about"><button className="contact-button">about</button></Link>
            </div>
            <div className="col-md-4 projects-nav nav-box">
              <Link to="/projects"><button className="nav-button">projects</button></Link>
            </div>
          </div>
        </header>
        <div className="contact">
          <h1>Contact</h1>
        </div>
      </div>
    )
  }
}
export default Contact
