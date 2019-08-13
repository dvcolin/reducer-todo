import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/todoReducer'

const TodoList = () => {

    const [todos, setTodos] = useState();

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            
        </div>
    )
}

export default TodoList
