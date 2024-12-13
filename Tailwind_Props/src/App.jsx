import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
   let myObj = {
    username: "Hello",
    age: 21
   }


   let arr = [1,2,3,4]
  return (
    <>
     <h1 className='bg-blue-400 text-black p-4 rounded-xl'> Tailwind Test</h1>
      <Card channel="Hello World"  someObj = {myObj} username="Shravani"/>
      <Card />
    </>
  )
}

export default App
