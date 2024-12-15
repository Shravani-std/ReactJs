import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    // <UserContext.Provider></UserContext.Provider>
   <UserContextProvider> 
   <h1>Context Here</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  ) 
}

export default App
