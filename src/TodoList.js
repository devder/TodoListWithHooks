import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'


export default function TodoList(props) {
    if (props.todos.length)
        return (
            <Paper>
                <List>
                    {props.todos.map((t, idx) =>
                        <>
                            <Todo
                                task={t.task} toggleTodo={props.toggleTodo}
                                key={t.id} id={t.id} editTodo={props.editTodo}
                                completed={t.completed} removeTodo={props.removeTodo} />

                            {idx < props.todos.length - 1 && <Divider />}
                        </>
                    )}
                </List>
            </Paper>
        )
    return null
}
