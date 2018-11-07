import React from 'react'
// import {Link} from 'react-router-dom'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  render () {
    return (
      <section className="todo">
        <h3 className="med-heading">to do</h3>
        <input onChange={this.handleChange}></input>
      </section>

    )
  }
}
export default Todo
