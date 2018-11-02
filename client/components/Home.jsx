import React from 'react'
// import { Link } from 'react-router-dom'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'
import Footer from './Footer'
import Header from './Header'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Footer />
      </div>
    )
  }
}
export default Home
