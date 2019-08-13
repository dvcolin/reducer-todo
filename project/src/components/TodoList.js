import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/todoReducer'

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            {state.items.map(todo => <p>{todo.item}</p>)}
        </div>
    )
}

export default TodoList
