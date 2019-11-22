export const initialState = {
    
    items: [

    {item: 'Take out the garbage',
    completed: false,
    id: Math.floor(Math.random() * 9999999999)},

    {item: 'Wash dishes',
    completed: false,
    id: Math.floor(Math.random() * 9999999999)},

    {item: 'Learn about reducers',
    completed: false,
    id: Math.floor(Math.random() * 9999999999)},
    
]
    
}


export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO' :
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'TOGGLE_TODO' :
            return {
                ...state,
                items: state.items.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            }
        case 'CLEAR' :
            return {
                ...state,
                items: state.items.filter(item => item.completed === false)
            }
        default:
            return state
    }
}
