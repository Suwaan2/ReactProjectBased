import React from 'react'
import {useState} from 'react'


function Button({ButtonName}) {
   let [backColor, setBackColor] = useState('lightBlue')

  return (
    <div className='w-100 h-screen' style={{backgroundColor: backColor}}>
    
   <button className='w-25 h-10 mr-10 justify-center' style={{backgroundColor:'red', color:"black"}}  onClick={()=>setBackColor('red')} >
   RED
   </button>
   <button className='w-25 h-10 mr-10 justify-center' style={{backgroundColor:'purple', color:"black"}} onClick={()=>setBackColor('purple')} >
   PURPLE
   </button>
   <button className='w-25 h-10 mr-10 justify-center' style={{backgroundColor:'yellow', color:"black"}} onClick={()=>setBackColor('yellow')} >
   YELLOW
   </button>
   <button className='w-25 h-10 mr-10 justify-center' style={{backgroundColor:'green', color:"black"}} onClick={()=>setBackColor('green')} >
   GREEN
   </button>
   <button className='w-25 h-10 mr-10 justify-center' style={{backgroundColor:'blue', color:"black"}} onClick={()=>setBackColor('blue')} >
   BLUE
   </button>
   
 

     </div>

  )
}

export default Button
