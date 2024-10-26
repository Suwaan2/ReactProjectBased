import { useState, useCallback, useEffect } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*(){}[]"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)//Getting the index of the String
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, number, character, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character, passwordGenerator])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-50 bg-gray-600 text-2xl flex flex-col justify-center'> 
    <h1 className='text-red-300'>Password Generator</h1>
    <div className='flex shadow rounded-xl overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3 rounded-2xl'
      placeholder="Password"
      readOnly />
      <button className='rounded-3xl ml-1'>Copy</button>
     
    </div>
    <div className='flex text-base gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={number}
        id="numberInput"
        onChange={()=>{setNumber((prev)=>!prev)}} />
      <label htmlFor="number">Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={character}
        id="characterInput"
        onChange={()=>{setCharacter((prev)=>!prev)}} />
      <label htmlFor="number">Character</label>
      </div>
    </div>
   </div>
    </>
  )
 
  
}

export default App
