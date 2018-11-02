import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'

import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
          </div>
        </Router>

      </div>
    )
  }
}

export default App
