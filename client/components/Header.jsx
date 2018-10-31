import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="container-fluid header">
      <h1 className="name-h1">Lauren Hart</h1>
      <h5 className="title-h5">full stack developer</h5>
      <Nav />
    </header>
  )
}

export default Header
