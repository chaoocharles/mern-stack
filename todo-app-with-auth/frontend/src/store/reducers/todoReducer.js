import { toast } from "react-toastify";

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      toast.success("A todo was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.todo.data, ...todos];
    case "UPDATE_TODO":
      toast.success("A todo was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "CHECK_TODO":
      toast.success("A todo status was changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "DELETE_TODO":
      toast.success("A todo was deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.filter((todo) => todo._id !== action.id);
    case "CLEAR_TODOS":
      return [];
    default:
      return todos;
  }
};

export default todoReducer;
