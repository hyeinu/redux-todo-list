import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(){
    super();
    this.state ={
      text: this.props.task,
      id: this.props.id
    }
    this._onInputChange = this._onInputChange.bind(this)
  }
  _onInputChange(e){
    this.setState({task: e.target.value})
  }
  _edit(){
    let { id, text } = this.state
    this.props.editTodo(id, task)
    this.props.closeModal()
  }
  render(){
    return(
      <Modal show={this.props.showModal} onHide={this._closeModal}>
        <form onSubmit={this._edit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={this.state.text} onChange={this._onInputChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-success" type="submit">Save</Button>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </form>
      </Modal>
    )
  }
}
