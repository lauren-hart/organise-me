import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App
