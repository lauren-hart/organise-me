import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Router>
          <Route exact path='/' component={Home}/>
        </Router>
      </div>
    )
  }
}

export default App
