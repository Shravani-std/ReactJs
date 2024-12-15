import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  
  const addValue = () =>{

    if(counter < 20) {
      console.log("Value added", Math.random());
      counter = counter+1
      setCounter(counter)
      // setCounter(counter+1)
      
    }
    else{
      console.log("You've reach the limit 20")
    }
  }

  const removeValue =()=>{

    if (counter > 0) {
      
      console.log("Value has been removed ", counter)
      counter = counter -1
      setCounter(counter)
    }
    else{
      console.log( " Empty count...")
    }
  }

  return (
    <>
    <h1> Hello World</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}> Add Value{counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    <footer> footer: {counter} </footer>
    </>
  )
}

export default App
