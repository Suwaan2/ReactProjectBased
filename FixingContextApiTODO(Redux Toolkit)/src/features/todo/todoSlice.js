import { createSlice, nanoid } from "@reduxjs/toolkit";

// Passing the initial State 

const initialState = {
    todos: [{id:1, text: "Todo Msg", completed: false}]
}

//Creating the slice and defining the function

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            //Creating the todo
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            //Pushing the todo
            state.todos.push(todo)
        },

        deleteTodo:(state, action) =>{
            state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload
            )
        },

        updateTodo:(state, action)=>{
            state.todos = state.todos.map((prevTodo)=>todo.id === id ? prevTodo : todo  )
        },

        toggleComplete : (state, action) =>{
            Todos((prev) =>
                prev.map((prevTodo) =>
                  prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
                )
            )
        },
    }
}) 

export const {addTodo, deleteTodo, updateTodo, toggleComplete} = todoSlice.actions;

export default todoSlice.reducer