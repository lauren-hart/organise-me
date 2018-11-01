import React from 'react'
// import { Link } from 'react-router-dom'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'

class Home extends React.Component {
  render () {
    return (
      <div>
        <About />
        <Stack />
        <Experience />
        <Projects />
      </div>
    )
  }
}
export default Home
