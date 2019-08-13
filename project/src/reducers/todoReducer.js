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
    return state;
}
