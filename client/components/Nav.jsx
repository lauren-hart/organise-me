import React from 'react'
// import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <div className="row nav">
        <div className="col-md-4 about nav-box">
          <h4 className="nav-h4">about</h4>
        </div>
        <div className="col-md-4 experience nav-box">
          <h4 className="nav-h4">experience</h4>
        </div>
        <div className="col-md-4 projects nav-box">
          <h4 className="nav-h4">projects</h4>
        </div>
      </div>
    )
  }
}
export default Nav
