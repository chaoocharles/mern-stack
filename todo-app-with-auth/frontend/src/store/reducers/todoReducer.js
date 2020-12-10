const todoReducer = (todos = [], action) => {

    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data;
        case "ADD_TODO":
            return [action.todo.data, ...todos];
        case "UPDATE_TODO":
            const filteredTodos = todos.filter((todo) => todo._id !== action.todo.data._id);
            return [action.todo.data, ...filteredTodos];
        default:
          return todos;
      }
}

export default todoReducer;