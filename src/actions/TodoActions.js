import uuid from 'uuid'

export function createTodo(todo){
  return {
    type: 'CREATE_TODO',
    payload: {
      todo: {
        task: todo.task,
        time: Date.now(),
        id: uuid()
      }
    }
  }
};
export function deleteTodo(id){
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
};
export function editTodo(id, task){
  return {
    type: 'EDIT_TODO',
    payload: {
      id,
      task
    }
  }
};


//export function createTodo(todo){}
//export function deleteTodo(todo){}
//still work with destructuring

//can also make an object and invoke the functions in the component
