import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonGroup, Button } from '@material-ui/core';
import { Create, Delete, CheckCircle, ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles({
    todoStyle: {
      margin: "20px auto",
      padding: "20px",
      border: "2px solid #bdbdbd",
      borderRadius: "9px",
      display: "flex",
      justifyContent: "space-between"
    },
    moreStyle: {
        color: "#8f8f8f"
    }
});

const Todo = () => {

    const classes = useStyles();

    return ( 
        <>
            <div className = {classes.todoStyle}> 
                <div>
                    <Typography variant = "subtitle1">My Todo</Typography>
                    <Typography variant = "body2" className = {classes.moreStyle}>Author</Typography>
                    <Typography variant = "body2" className = {classes.moreStyle}>Date</Typography>
                </div>
                <div>
                <ButtonGroup size="small" aria-label="outlined primary button group">
                    <Button>
                        <CheckCircle/>
                    </Button>
                    <Button>
                        <Create color="primary"/>
                    </Button>
                    <Button>
                        <Delete color="secondary"/>
                    </Button>
                    <Button>
                        <ArrowDropDown />
                    </Button>
                </ButtonGroup>
                </div>
            </div>
        </>
     );
}
 
export default Todo;