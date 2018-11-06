import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Stack from './Stack'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      home: false,
      contact: false,
      projects: false
    }
    // this.handleContact = this.handleContact.bind(this)
    // this.handleHome = this.handleHome.bind(this)
    // this.handleProjects = this.handleProjects.bind(this)
  }

  // handleContact () {
  //   this.setState({
  //     contact: true,
  //     projects: false,
  //     home: false
  //   })
  // }

  // handleHome () {
  //   this.setState({
  //     home: true,
  //     contact: false,
  //     projects: false
  //   })
  // }

  // handleProjects () {
  //   this.setState({
  //     home: false,
  //     contact: false,
  //     projects: true
  //   })
  // }

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
        {/* <header className="header">
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

            { this.state.home
              ? <div className="col-md-4 home-nav nav-box">
                <Link to="/"><button onClick={this.handleHome} className="nav-button-selected">home</button></Link>
              </div> : <div className="col-md-4 home-nav nav-box">
                <Link to="/"><button onClick={this.handleHome} className="nav-button">home</button></Link>
              </div>}

            { this.state.contact
              ? <div className="col-md-4 contact-nav nav-box">
                <Link to="/contact"><button onClick={this.handleContact} className="nav-button-selected">contact</button></Link>
              </div> : <div className="col-md-4 contact-nav nav-box">
                <Link to="/contact"><button onClick={this.handleContact} className="nav-button">contact</button></Link>
              </div>}

            { this.state.projects
              ? <div className="col-md-4 projects-nav nav-box">
                <Link to="/projects"><button onClick={this.handleProjects} className="nav-button-selected">projects</button></Link>
              </div> : <div className="col-md-4 projects-nav nav-box">
                <Link to="/projects"><button onClick={this.handleProjects} className="nav-button">projects</button></Link>
              </div>}

          </div>
        </header> */}

        <About />
        <Stack />
        <Experience />

      </div>

    )
  }
}
export default Home
