import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className="nav row">
          <div className="col-md-4 about-nav nav-box">
            <Link to ""><button className="nav-button">about</button></Link>
          </div>
          <div className="col-md-4 experience-nav nav-box">
            <button className="nav-button">experience</button>
          </div>
          <div className="col-md-4 projects-nav nav-box">
            <button className="nav-button">projects</button>
          </div>
        </div>

      </div>
    )
  }
}
export default Nav
