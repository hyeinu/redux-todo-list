
export default function todos(state = [], action){
  switch(action.type){
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;
    case 'DELETE_TODO':
      return state.filter(todo => todo.id === action.payload.id ? false : true)
      break;
    case 'EDIT_TODO':
      return state.map(todo => {
        if(todo.id === action.payload.id){
          todo.task = action.payload.task
          return todo
        } else {
          return todo
        }
      })
      break;
    default:
      return state;
  }
}
