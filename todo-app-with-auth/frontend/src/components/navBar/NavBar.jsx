import React from 'react';

import {AppBar, Typography, Toolbar,  Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    authButton: {
      right: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkStyle: {
      textDecoration: "none",
      color: "#fafafa"
    }
  }));

  const NavBar = () => {
    const classes = useStyles();

      return ( 
          <>
            <div className={classes.root}>
            <AppBar position = "static" color = "primary">
                <Toolbar>
                <Typography variant = "h4" className={classes.title}>
                    <Link className = {classes.linkStyle} to="/">
                    toDoApp;
                    </Link>
                </Typography>
                <Button edge = "end" color ="inherit" className = {classes.authButton}>
                    <Link className = {classes.linkStyle} to="/signin">
                    SignIn
                    </Link>
                </Button>
                <Button edge = "end" color ="inherit" className = {classes.authButton}>
                    <Link className = {classes.linkStyle} to="/signin">
                    SignOut
                    </Link>
                </Button>
                <Button edge = "end" color ="inherit" className = {classes.authButton}>
                    <Link className = {classes.linkStyle} to="/signup">
                    SignUp
                    </Link>
                </Button>
                </Toolbar>
            </AppBar>
            </div>
          </>
       );
  }
   
  export default NavBar;