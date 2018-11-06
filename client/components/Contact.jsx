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
            <div className="col-md-4 home-nav nav-box">
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

        <div className="contact">

          <div className="col-md-6">

            <h3 className="contact-h3-1">Don't be a stranger </h3>
            <h3 className="contact-h3-2">Say Hello!</h3>

            <div className="contact-box">

              <div className="contact-details">
                <h4 className="contact-h4">email:</h4>
                <p className="contact-p">laurenannehart@gmail.com</p>
              </div>

              <div className="contact-details">
                <h4 className="contact-h4">mobile:</h4>
                <p className="contact-p">022 5033 055</p>
              </div>

              <div className="contact-details">
                <h4 className="contact-h4">LinkedIn:</h4>
                <a href="https://www.linkedin.com/in/lauren-hart-01551620/" className="contact-link">connect</a>
              </div>

              <div className="contact-details">
                <h4 className="contact-h4">github:</h4>
                <a href="https://github.com/lauren-hart" className="contact-link">have a look!</a>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <img className="contact-img" src="./images/contact.jpg" />
          </div>

        </div>
      </div>
    )
  }
}
export default Contact
