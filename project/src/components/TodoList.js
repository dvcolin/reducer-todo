import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/todoReducer'
import TodoForm from './TodoForm'
import '../App.css'

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = todo => {
        dispatch({ type: 'ADD_TODO', payload: todo });
    }

    const toggleTodo = id => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    }

    const clearCompleted = todos => {
        dispatch({ type: 'CLEAR', payload: todos });
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
            {state.items.map(todo => <p key={todo.id} id={todo.id} onClick={e => 
                {
                    toggleTodo(todo.id)
                    e.target.classList.toggle('completed')
                    }}>{todo.item}</p>)}
            {console.log(state)}
        </div>
    )
}

export default TodoList
