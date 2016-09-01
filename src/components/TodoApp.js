import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui';

import { createTodo, deleteTodo, editTodo } from '../actions/TodoActions';

import TodoItem from './TodoItem'
import TodoForm from './TodoForm'



class TodoApp extends Component {
  render() {
    let { todos, createTodo, deleteTodo, editTodo } = this.props;
    let TodoList = todos.map((todo, index) => <TodoItem key={index} todo={todo} editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo} />)

    return (
      <div className='col-xs-5'>
        <h1>TodoApp</h1>
        <TodoForm createTodo={createTodo} />
        <List>
          {TodoList}
        </List>
      </div>
    )
  }
}

//the keys will become props

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}
function mapDispatchToProps(dispatch){
  return {
    createTodo(todo){
      dispatch(createTodo(todo));
    },
    deleteTodo(id){
      dispatch(deleteTodo(id))
    },
    editTodo(id, task){
      dispatch(editTodo(id, task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
