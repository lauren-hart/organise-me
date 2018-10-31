import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className="header-group">
          <Header />
          <Nav />
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App
