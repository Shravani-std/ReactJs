import { useState, useCallback , useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAlllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

//ref
  const passRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if( numberAlllowed) str += "1234567890"
    if( charAllowed) str += "!@#$%^&*()_+}{[]\';'':><.,?/"

    for (let i = 0; i <length; i++) {
      let element = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(element)
    }

    setPassword(pass)

  }, [length,numberAlllowed,charAllowed]);


  const copyPassToClick = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectRange(6,100)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passGen()
  }, [length,numberAlllowed,charAllowed,passGen])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-3 text-orange-500 bg-gray-700">
  <h1 className="text-center text-white text-lg font-bold py-2">Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
    <input 
      type="text"
      value={password || ""}
      className="outline-none w-full py-2 px-3 text-gray-800"
      placeholder="Password"
      readOnly
      ref={passRef}
    />
    <button onClick={copyPassToClick} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input
       type='range'
       min={6}
       max={100}
       value={length}
       className='cursoe-pointer' onChange={(e) => {setLength(e.target.value)}}
      />
      <label > Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
       type='checkbox'
       defaultChecked={numberAlllowed}
       id='numberInput'
       onChange={()=>{
        setNumberAllowed((prev) => !prev);
       }}
      />
      <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
       type='checkbox'
       defaultChecked={charAllowed}
       id='characterInput'
       onChange={()=>{
        setCharAllowed((prev) => !prev);
       }}
      />
      <label htmlFor='characterInput'>Characters</label>
    </div>
  </div>
</div>

   
   
    </>
  )
}

export default App
