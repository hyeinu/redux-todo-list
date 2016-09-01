import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { RaisedButton, FontIcon } from 'material-ui';
// import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 24,
};

export default class TodoList extends Component {
  constructor(){
    super();

    this.state = {
      showModal: false,
      todoText: '',
      todoId: ''
    }

    this._edit = this._edit.bind(this)
    this._delete = this._delete.bind(this)
    this._openModal = this._openModal.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this._onInputChange = this._onInputChange.bind(this)
  }
  _openModal(id, todo) {
    this.setState({
      showModal: true,
      todoText: todo,
      todoId: id
    });
  }
  _closeModal(){
    this.setState({ showModal: false })
  }
  _onInputChange(e){
    this.setState({todoText: e.target.value})
  }
  _delete(id){
    this.props.deleteTodo(id)
  }
  _edit(e) {
    e.preventDefault();
    let id = this.state.todoId;
    let text = this.state.todoText;
    this.props.editTodo(id, text)
    this._closeModal();
 }
  render(){
    let { todos } = this.props;
    let Todos = todos.map((todo, index) => {
      return (
        <li key={index} onDoubleClick={this._delete.bind(null, todo.id)}>
        {todo.task}
        <FontIcon className="material-icons" style={iconStyles} onClick={this._openModal.bind(null, todo.id, todo.task)}>edit</FontIcon>
        </li>
      )
    })
    return(
      <div>
        <ol>
          {Todos}
        </ol>
        <Modal show={this.state.showModal} onHide={this._closeModal}>
        <form onSubmit={this._edit}>
        <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" value={this.state.todoText} onChange={this._onInputChange}/>
        </Modal.Body>
        <Modal.Footer>
        <Button className="btn btn-success" type="submit">Save</Button>
        <Button onClick={this._closeModal}>Close</Button>
        </Modal.Footer>
        </form>
        </Modal>
        </div>
    )
  }
}
