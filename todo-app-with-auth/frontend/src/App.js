import React from 'react';
import './App.css';

import { makeStyles } from "@material-ui/core/styles";
import { Container, AppBar, Typography } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  }
});

function App() {
  const classes = useStyles();

  return (
    <>
    <BrowserRouter>
      <ToastContainer />
      <Container maxWidth = "md">
        <AppBar position = "static" color = "primary">
          <Typography variant = "h3" align = "center">toDoApp;</Typography>
        </AppBar>
        <Container className={classes.contentStyle} maxWidth = "sm">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Todos} />
          </Switch>
        </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
