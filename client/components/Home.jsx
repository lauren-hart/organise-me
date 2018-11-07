import React from 'react'
// import {Link} from 'react-router-dom'
import Header from './Header'
import Todo from './Todo'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className="bg"></div>
        <Header />
        <Todo />
      </div>

    )
  }
}
export default Home
