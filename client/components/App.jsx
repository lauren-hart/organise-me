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
        
          <Switch>
            <Route exact path='/about' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>

        <Footer />
      </div>
    )
  }
}

export default App
