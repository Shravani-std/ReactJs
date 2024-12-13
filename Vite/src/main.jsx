import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

//Method-1
//JSX Bundler that includes javascript and HTML and it convert jsx syntax into belows tree like structure in detail that can understand by React 
function MyApp(){
  const user = 'Shravani'
  return(
    <div>
      <h1>Custom App {user}</h1>
    </div>
  )
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------- 

//Method-2
//Backend Tree structure which can understand by React
/*const reactElement = {
  type : 'a',
  props:{
    href : 'http.//google.com',
    target: '_blank'
  },
  Children: 'Click me'
}
const main = (
  <a href='http./google.com' target='_blank'> View Google</a>
)
----------------------------------------------------------------------------------*/

//Method-3 with the help of direct react 
const user2 = "User"
const reactNew = React.createElement(
  'a',
  {href: 'http,//google.com' , target:'_blank'},
  'click to view Google',
  user2
  //we cannot write here if else and all conditions coz this is eveluated expression
)
// ------------------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // <MyApp/>
    /* reactElement ---cannot access directly becoz we didn't initialize the render menthod here  */
    // main
  reactNew
)
