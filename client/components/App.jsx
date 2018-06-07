import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Portfolio from './Portfolio'
import Footer from './Footer'

class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <Header />

        <div className='app-box'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App
