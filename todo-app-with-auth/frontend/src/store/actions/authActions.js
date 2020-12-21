import instance from "../../api";
import { toast } from "react-toastify";

export const signup = (user) => {
    return(dispatch) => {
        instance.post('/signup', user)
        .then((user) => {
            dispatch({
                type: "SIGN_UP",
                user
            })
        })
        .catch((error) => {
            console.log(error.response); 
            
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
        })
    }
}