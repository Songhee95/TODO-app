import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import './Todo.css';
import React, { useState } from 'react';
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from "@material-ui/core/styles";

//modal style 
const useStyles = makeStyles((theme) =>({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    },
}));

//props stands for properties
function Todo(props) {
    const [open, setOpen] = useState(false);
    //input state for modal 
    const [input, setInput] = useState("");

    const handleOpen = ()=>{
        setOpen(true);
    }
    const classes = useStyles();
    const updateTodo = ()=>{
        //update the todo with the new input text\
        db.collection('todos').doc(props.todo.id).set({
            text: input
        }, { merge: true })
        //merge: true prevents merge present data => it will overwrite
        setOpen(false);
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e =>setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>

        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰"/>
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
