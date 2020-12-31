import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import moment from "moment";

import { deleteTodo, checkTodo } from "../../store/actions/todoActions";

const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  moreStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Todo = ({ todo, setTodo, todos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleOnUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    setTodo({ ...foundTodo });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  return (
    <>
      <div className={classes.todoStyle}>
        <div>
          {todo.isComplete ? (
            <Typography variant="subtitle1" className={classes.checked}>
              {todo.name}
            </Typography>
          ) : (
            <Typography variant="subtitle1">{todo.name}</Typography>
          )}
          <Typography variant="body2" className={classes.moreStyle}>
            Author: {todo.author}
          </Typography>
          <Typography variant="body2" className={classes.moreStyle}>
            Added: {moment(todo.date).fromNow()}
          </Typography>
        </div>
        <div>
          {auth._id && (auth._id === todo.uid) ? (
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => handleCheck(todo._id)}>
                {todo.isComplete ? (
                  <CheckCircle className={classes.isComplete} />
                ) : (
                  <CheckCircle color="action" />
                )}
              </Button>
              <Button onClick={() => handleOnUpdateClick(todo._id)}>
                <Create color="primary" />
              </Button>
              <Button onClick={() => handleDelete(todo._id)}>
                <Delete color="secondary" />
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Todo;
