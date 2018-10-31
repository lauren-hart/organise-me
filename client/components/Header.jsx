import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="container-fluid header">
      <h1 className="name-h1">Lauren Hart</h1>
      <h5 className="title-h5">full stack developer</h5>
      <div className="row">
        <div className="offset-by-two eight columns">
          <a href="https://www.facebook.com/laurenannehart" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/laurnhart/" className="fa fa-instagram"></a>
          <a href="https://www.linkedin.com/in/lauren-hart-01551620/" className="fa fa-linkedin"></a>
        </div>
      </div>
      <Nav />
    </header>
  )
}

export default Header
