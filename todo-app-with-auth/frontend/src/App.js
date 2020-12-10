import React, { useState } from 'react';
import './App.css';

import AddTodo from "./components/todos/AddTodo";
import Todos from "./components/todos/Todos";

import { makeStyles } from "@material-ui/core/styles";
import { Container, AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  }
});

function App() {
  const classes = useStyles();
  const [todo, setTodo] = useState({
    name: '',
    isComplete: false
})

  return (
    <>
      <Container maxWidth = "md">
        <AppBar position = "static" color = "primary">
          <Typography variant = "h3" align = "center">toDoApp;</Typography>
        </AppBar>
        <Container className={classes.contentStyle} maxWidth = "sm">
          <AddTodo todo = { todo } setTodo = { setTodo }/>
          <Todos todo = { todo } setTodo = { setTodo }/>
        </Container>
      </Container>
    </>
  );
}

export default App;
