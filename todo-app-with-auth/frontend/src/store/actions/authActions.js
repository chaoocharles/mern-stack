import instance from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    instance
      .post("/signup", user)
      .then((user) => {
        dispatch({
          type: "SIGN_UP",
          user,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    instance
      .post("/signin", { email, password })
      .then((token) => {
          console.log("hello", token)
        dispatch({
          type: "SIGN_IN",
          token,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
