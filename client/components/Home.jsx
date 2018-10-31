import React from 'react'
// import { Link } from 'react-router-dom'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'

class Home extends React.Component {
  render () {
    return (
      <div>
        <About />
        <Stack />
        <Experience />
      </div>
    )
  }
}
export default Home
