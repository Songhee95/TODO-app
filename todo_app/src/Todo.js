import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Todo.css';
import React from 'react'
//props stands for properties
function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy deadline ⏰"/>
            </ListItem>
        </List>
    )
}

export default Todo
