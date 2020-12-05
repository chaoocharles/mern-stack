import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
        marginLeft: "20px",
    }
  });

const AddTodo = () => {

    const classes = useStyles();

    return ( 
        <>
            <form noValidate autoComplete="off" className={classes.formStyle}>
                <TextField id="enter-todo" label="enterToDo" variant="outlined" fullWidth />
                <Button variant="contained" color="primary" className = {classes.submitButton}>
                    <Send/>
                </Button>
            </form>
        </>
     );
}
 
export default AddTodo;