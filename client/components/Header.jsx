import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <h1 className="name-h1">Lauren Hart</h1>
      <h5 className="title-h5">full stack developer</h5>
      <div className="row">
        <div className="links">
          <a href="mailto:laurenannehart@gmail.com" className="fa fa-envelope"></a>
          <a href="https://github.com/lauren-hart" className="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/lauren-hart-01551620/" className="fa fa-linkedin"></a>
        </div>
      </div>
    </header>
  )
}

export default Header
