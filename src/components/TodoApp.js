import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo, deleteTodo, editTodo } from '../actions/TodoActions';

import TodoList from './TodoList'
import TodoForm from './TodoForm'

class TodoApp extends Component {
  render() {

    let { todos, createTodo, deleteTodo, editTodo } = this.props;

    return (
      <div>
        <h1>TodoApp</h1>
        <TodoForm createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
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
