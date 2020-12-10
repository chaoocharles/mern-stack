const todoReducer = (todos = [], action) => {

    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data;
        case "ADD_TODO":
            return [action.todo.data, ...todos];
        case "UPDATE_TODO":
            return todos.map((todo) => todo._id === action.todo.data._id ? action.todo.data : todo);
        default:
          return todos;
      }
}

export default todoReducer;