import React from 'react';
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

  return (
    <>
      <Container maxWidth = "md">
        <AppBar position = "static" color = "primary">
          <Typography variant = "h3" align = "center">toDoApp;</Typography>
        </AppBar>
        <Container className={classes.contentStyle} maxWidth = "sm">
          <AddTodo/>
          <Todos/>
        </Container>
      </Container>
    </>
  );
}

export default App;
