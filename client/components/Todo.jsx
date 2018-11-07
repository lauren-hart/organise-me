import React from 'react'
// import {Link} from 'react-router-dom'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      submit: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClick () {
    this.setState({
      submit: !this.state.submit
    })
  }

  render () {
    return (
      <section className="todo">
        <h3 className="med-heading">to do</h3>
        <input className="todo-input" onChange={this.handleChange}></input>
        <button onClick={this.handleClick} className="add-todo">add</button>
      </section>

    )
  }
}
export default Todo
