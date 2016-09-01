import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

const style = {
  margin: 12,
};

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
    this.props.createTodo( {task} )

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
        <TextField
         hintText="ex: Do Homework"
         floatingLabelText="Add a Task"
         floatingLabelFixed={false}
         onChange={this._onInputChange}
         value={task}
          />
        <RaisedButton label="Add" type="submit" primary={true} style={style}  />
      </form>
    )
  }
}
