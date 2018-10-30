import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Stack from './Stack'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <About />
        <Stack />
      </div>
    )
  }
}
export default Home
