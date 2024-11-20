import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {


  return (
  <>
  <h1 className='bg-gray-600'>Hello world</h1>
  <TodoForm />
  <TodoItem />
  </>
  )
}

export default App
