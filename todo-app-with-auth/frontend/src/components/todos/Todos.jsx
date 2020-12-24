import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

import { useSelector } from "react-redux";

const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  return (
    <>
      {auth._id ? (
        <>
          <AddTodo todo={todo} setTodo={setTodo} />
          <ListTodos todo={todo} setTodo={setTodo} />
        </>
      ) : (
        <>
          <ListTodos todo={todo} setTodo={setTodo} />
        </>
      )}
    </>
  );
};

export default Todos;
