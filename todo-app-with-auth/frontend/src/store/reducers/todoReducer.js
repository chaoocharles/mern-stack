const initState = {};

const todoReducer = (state = initState, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return state;
        case "GET_TODOS":
            return state;
        default:
          return state;
      }
}

export default todoReducer;