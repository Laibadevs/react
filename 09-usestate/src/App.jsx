// import React, { useState, useSyncExternalStore } from "react";
// const App=()=>
// {
//   const[num,setNum]=useState(20)
//   const[user,setUserName]=useState("laiba")
//   const [arr,setArray]=useState([10,20,30])
//   function changeNum()
//   {
//     setNum(30)
//     setUserName("Ramzana")
//   }

//   return(
//     <div>
//       <h1>Value of a is {num} <br/>Username is {user}</h1>
//       <button onClick={changeNum}>Click </button>
//     </div>
//   )
// }
// export default App

import React, { useState } from 'react'

const App=()=>{
  const[In,setIn]=useState(1)
  function Counter()
  {
    setIn(In+1)
  }
  function Dec()
  {
    setIn(In-1)
  }
  function jump()
  {
    setIn(In+5)
  }
  return(
    <div>
      <h1>{In}</h1>
      <button onClick={Counter}>Increase</button>
      <button onClick={Dec}>Decrease</button>
      <button onClick={jump}>Increase by 5</button>
    </div>
  )

}
export default App