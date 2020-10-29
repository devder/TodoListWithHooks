import React from 'react'
import EditTodoForm from './EditTodoForm'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/CheckBox'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import useToggleState from './hooks/useToggleState'


export default function Todo({ task, id, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState(false)

    return (
        <div>
            <ListItem >
                {isEditing ? <EditTodoForm task={task} id={id} editTodo={editTodo} toggleisEditing={toggleIsEditing} /> : <>
                    <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed && "line-through" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="edit" onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>}
            </ListItem>
        </div>
    )
}
