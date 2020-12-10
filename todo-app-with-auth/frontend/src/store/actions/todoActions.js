import instance from "../../api";

export const getTodos = () => {
    return(dispatch) => {
        instance.get('/todos')
        .then((todos) => {
            dispatch({
                type: "GET_TODOS",
                todos
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const addTodo = (todo) => {
    return(dispatch) => {
        instance.post('/todos', todo)
        .then((todo) => {
            dispatch({
                type: "ADD_TODO",
                todo
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const updateTodo = (newTodo, id) => {
    return(dispatch) => {
        instance.put(`/todos/${id}`, newTodo)
        .then((todo) => {
            dispatch({
                type: "UPDATE_TODO",
                todo
            })

            console.log(todo, "heey")
        })
        .catch((error) => { 
            console.log(error)
        })
    }
}