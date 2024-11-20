import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world " }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // Creating Todo 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            //Pushing the todo on the intialState
            state.todos.push(todo)
         },
        removeTodo: (state, action) => {
            //Overwriting the state of the todos and filtering the id of the todo the id should not be find on the action.payload
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
         },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer