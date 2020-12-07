const initState = {};

const todoReducer = (state = initState, action) => {

    switch (action.type) {
        case "GET_TODOS":
            return action.todos;
        case "GET_TODOS_ERROR":
            return {
                ...state,
                getTodosError: action.error
            };
        default:
          return state;
      }
}

export default todoReducer;