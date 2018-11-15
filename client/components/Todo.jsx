import React from 'react'
// import {Link} from 'react-router-dom'
import {getTodos, addTodo} from '../actions/todo'
import {connect} from 'react-redux'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.sendTodo = this.sendTodo.bind(this)
  }

  // When the component mounts it will dispatch
  // getTodos thunk function (in actions)
  componentDidMount () {
    // triggering getTodos action creator
    this.props.dispatch(getTodos())
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    this.setState({
      submitted: !this.state.submitted
    })
    this.sendTodo()
  }

  sendTodo () {
    this.props.dispatch(addTodo(this.state))
  }

  render () {
    return (
      <section className="todo">
        <h3 className="med-heading">to do</h3>
        <div className="add-todo">
          <input className="todo-input" placeholder="what to do?" name="todo" value={this.state.todo} onChange={this.handleChange}></input>
          <button onClick={this.handleClick} className="add-button">add</button>
        </div>
        <div className="todo-list">{this.props.todo && this.props.todo.map(item => {
          return <p key={item.id}>{item.todo}</p>
        })}</div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo.todo
  }
}

export default connect(mapStateToProps)(Todo)
