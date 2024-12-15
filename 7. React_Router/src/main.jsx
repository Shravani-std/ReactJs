import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
// import Route from './Route.jsx'
import User from './Component/User/User.jsx'
import Layout from './Layout.jsx'
import Github, { githubInfoLoader } from './Component/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "home",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>

//       },
//       {
//         path: "contact",
//         element: <Contact/>

//       },
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<Layout/>}>  

        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contect' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route path='github' element={<Github loader = {githubInfoLoader} />}/>


    </Route>


  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
