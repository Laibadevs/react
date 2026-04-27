import React, { useState } from "react";
const App =()=>
{
  //  const [num,setNum]=useState({user:"laiba",age:21})
  const [num,setNum]=useState(10)
  // const [num,setNum]=useState([10,20,30])
  //object , function, array are reference variable they are not directly stored in memory they stored somewhere else use reference im memory
  const btnClicked=()=>
  {
    //destructuring: same to same copy but reference are not same now
    // const newNum={...num}; 
    // newNum.user='Aman'
    // setNum(newNum)
    //array
    // const newNum=[...num]
    // newNum.push(99)
    // setNum(newNum8)
    // setNum(prev=>({...prev,age:50}))
    //batch update
    setNum(prev=>(prev+1))


  }
  return(
    <div>
   <h1>{num.user}, {num.age}</h1>
   {/* <h1>{num}</h1> */}
   <button onClick={btnClicked}>Click me</button>
   </div>
  )
}
export default App