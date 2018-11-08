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
    this.handleClick = this.handleClick.bind(this)
    // this.sendTodo = this.sendTodo.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClick () {
    this.setState({
      submitted: !this.state.submitted
    })
    // this.sendTodo()
  }

  // sendTodo () {
  //   this.props.dispatch(addBet(this.state))
  // }

  render () {
    return (
      <section className="todo">
        <h3 className="med-heading">to do</h3>
        <div className="add-todo">
          <input className="todo-input" onChange={this.handleChange}></input>
          <button onClick={this.handleClick} className="add-button">add</button>
        </div>
      </section>

    )
  }
}
export default Todo
