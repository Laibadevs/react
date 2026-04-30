import { useEffect } from "react"
import { useState } from "react"
import React from "react"

 const App=()=>{
  
   const [num,setNum]=useState(0)
   const [num2,setNum2]=useState(100)
   const [a,setA]=useState(0)
   const [b,setB]=useState(0)
   useEffect(function()
  {
    console.log('us effect is running',num)
  },[num])
  //[num] is dependices
  function aChanging()
  {
    console.log("a value is change")
  }
  function bChanging()
  {
    console.log("b value is change")
  }
  useEffect(function()
{
  aChanging()
  console.log("use effect is running...")
},[a])
//when a value is changed then this use effect is run
  return(

    <div>
      <h1>value of num is :{num}
      </h1>
      <h1>Value of num2 is {num2} </h1>
       <button onMouseEnter={()=>{
          setNum(num+1)
          
        }}
        onMouseLeave={()=>
        {
          setNum2(num2+10)
        }
        }>Click Me</button>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>
        <button onClick={()=>
          {
            setA(a+1)
          }
        }> Change A</button>
        <button onClick={()=>
          {
            setB(b-1)
          }
        }>Change B</button>
    </div>
  )
 }
 export default App