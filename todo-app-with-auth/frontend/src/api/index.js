export const url = "https://chaoo-todo-app.herokuapp.com/api";
// export const url = "http://localhost:5000/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
