import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Todo.css';
import React from 'react';
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

//props stands for properties
function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰"/>
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
    )
}

export default Todo
