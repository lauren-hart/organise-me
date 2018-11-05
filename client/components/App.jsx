import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/stack' component={Stack}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/experience' component={Experience}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
  }
}

export default App
