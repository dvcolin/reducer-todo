import React, { useState } from 'react'
import styled from 'styled-components'

const TodoForm = props => {

    const StyledForm = styled.form`
        background: lightblue;
        width: 60%;
        margin: 0 auto;
    `;

    const TodoInput = styled.input`

    `

    const [newTodo, setNewTodo] = useState();

    
    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    return (
        <StyledForm>
            <h2>Add a new todo</h2>
            <TodoInput onChange={handleChanges} type='text' name='todo' placeholder="Enter todo" />
            <button onClick={props.addTodo(newTodo)} type='submit'>Submit</button>
        </StyledForm>
    )
}

export default TodoForm
