import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Context'
import { TodoForm, TodoItem } from './Components'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo = (id,todo) =>{
    setTodos ((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // or
   /*setTodos ((prev ) => prev.map((eachValue) => {
                        if(eachValue.id === id){
                          todo
                        }
                        else{
                          prevTodo
                        }
   }))*/
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter ((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
       prev.map((prevTodo) =>
         prevTodo.id === id ?
     {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  // After refreshing or after closing site open again we should have previous todo list thats why we could use useEffect method
  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))    
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={ {todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='bg-slate-500 min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage your Todo List</h1>
          <div className='mb-4'>
            {/* Todo form */}
            <TodoForm/>
          </div>

          <div className='flex flex-wrap gap-y-3'>
              {/* Todo item */}
              {todos.map((todo) => {
                <div key = {todo.id} className='w-full'>
                  <TodoItem todo = {todo}/>
                </div>
              })}
          </div>

        </div>

      </div>
    </TodoProvider>
  )
}

export default App
