import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(){
    super()

    this.state = {
      task: ''
    }
    this._onInputChange = this._onInputChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
  }
  _onSubmit(e){
    e.preventDefault();

    let { task } = this.state
    this.props.createTodo({task})

    this.setState({
      task: ''
    })
  }
  _onInputChange(e){
    this.setState({
      task: e.target.value
    })
  }
  render(){
    let { task } = this.state
    return(
      <form onSubmit={this._onSubmit}>
        <input type="text" value={task} onChange={this._onInputChange}/>
        <button className="btn btn-primary">Add</button>
      </form>
    )
  }
}
