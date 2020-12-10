import React, { useEffect } from 'react';

import Todo from './Todo'

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTodos } from '../../store/actions/todoActions'

const useStyles = makeStyles({
    todosStyle: {
      margin: "20px auto",
      padding: "20px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
    },
});

const Todos = ({ todo, setTodo }) => {

    const todos = useSelector((state) => state.todos)
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [todo._id, dispatch])

    return ( 
        <>
        <div className = {classes.todosStyle}>
    <Typography variant = "h5"> { todos.length > 0 ? "yourTodos;" : "noTodosYet;" } </Typography>
            { todos && todos.map( todo => {
               return <Todo todo = { todo } key = { todo._id } setTodo = { setTodo } todos = { todos }/>
            })}
        </div>
        </>
     );
}
 
export default Todos;