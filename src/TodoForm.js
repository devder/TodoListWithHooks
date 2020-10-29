import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'

function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("")
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addTodo(value)
        reset()
    }
    return (
        <div>
            <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
                <form onSubmit={handleSubmit}>
                    <TextField value={value} onChange={handleChange} margin="normal"
                        label="Add New Todo" fullWidth />
                </form>
            </Paper>
        </div>
    )
}

export default TodoForm