import React from 'react'
// import {Link} from 'react-router-dom'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      display: !this.state.display
    })
  }

  render () {
    return (
      <div>
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

      </div>
    )
  }
}
export default Nav
