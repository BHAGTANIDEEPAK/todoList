import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div className='bg-gray-800'>
      <h1 className='text-white text-3xl px-3 py-3'>Todo List Application!</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App