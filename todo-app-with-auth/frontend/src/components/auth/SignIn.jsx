import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from '@material-ui/core';

// import { signIn } from '../../store/actions/authActions';

const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
    },
    spacing: {
        marginTop: "20px",
    }
  });

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [creds, setCreds] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch()
        console.log(creds)
        setCreds({ email: '', password: ''});
    }

    return ( 
        <>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit = { handleSubmit }>
            <Typography variant = "h5">signIn;</Typography>
                <TextField
                    className = {classes.spacing}
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    value = {creds.email}
                    onChange = {(e) => setCreds({...creds, email: e.target.value})}
                />
                <TextField
                    className = {classes.spacing}
                    id="enter-email"
                    label="enterPassword"
                    variant="outlined"
                    fullWidth
                    value = {creds.password}
                    onChange = {(e) => setCreds({...creds, password: e.target.value})}
                />
                <Button variant="contained" color="primary" className = {classes.spacing} type="submit">
                    SignIn
                </Button>
            </form>
        </>
     );
}
 
export default SignIn;