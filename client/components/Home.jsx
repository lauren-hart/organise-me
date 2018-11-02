import React from 'react'
// import { Link } from 'react-router-dom'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      about: false,
      exp: false,
      projects: false
    }
    this.handleAbout = this.handleAbout.bind(this)
  }

  handleAbout () {
    this.setState({
      about: !this.state.about
    })
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
              <button onClick={this.handleClick} className="nav-button">about</button>
            </div>
            <div className="col-md-4 experience-nav nav-box">
              <button className="nav-button">experience</button>
            </div>
            <div className="col-md-4 projects-nav nav-box">
              <button className="nav-button">projects</button>
            </div>
          </div>
        </header>
      </div>

    )
  }
}
export default Home
