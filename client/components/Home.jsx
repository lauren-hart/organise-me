import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from './Nav'
import About from './About'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <About />
      </div>
    )
  }
}
export default Home
