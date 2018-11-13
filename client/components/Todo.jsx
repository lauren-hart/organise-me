import React from 'react'
// import {Link} from 'react-router-dom'
import {getTodos} from '../actions/todo'
import {connect} from 'react-redux'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: ''
      // input: '',
      // submit: false
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.sendTodo = this.sendTodo.bind(this)
  }

  // When the component mounts it will dispatch
  // getTodos thunk function (in actions)
  componentDidMount () {
    console.log('mounting')
    // triggering getTodos action creator
    this.props.dispatch(getTodos())
  }

  // handleChange (e) {
  //   this.setState({
  //     input: e.target.value
  //   })
  // }

  // handleClick () {
  //   this.setState({
  //     submitted: !this.state.submitted
  //   })
  //   this.sendTodo()
  // }

  // sendTodo () {
  //   this.props.dispatch(addBet(this.state))
  // }

  render () {
    return (
      <section className="todo">
        {/* <h3 className="med-heading">to do</h3>
        <div className="add-todo">
          <input className="todo-input" onChange={this.handleChange}></input>
          <button onClick={this.handleClick} className="add-button">add</button>
        </div> */}
        <div>{this.props.todos && this.props.todos.map(item => {
          return <p key={item.id}>{item.todo}</p>
        })}</div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

export default connect(mapStateToProps)(Todo)
