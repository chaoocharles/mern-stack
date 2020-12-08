const todoReducer = (todos = [], action) => {

    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data;
        case "ADD_TODO":
            return [action.todo.data, ...todos];
        default:
          return todos;
      }
}

export default todoReducer;