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
            dispatch({
                type: "GET_TODOS_ERROR",
                error
            })
        })
    }
}