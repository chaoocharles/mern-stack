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
            console.log(error);
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
        })
    }
}