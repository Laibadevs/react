import React from "react";
const App=()=>
{
  //problem page reload everytime when submit so overcome this problem use preventdefault 
  const submitHandler=(e)=>
  {
  e.preventDefault()
  console.log("form submit")
  }
  return(
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter your name"/>
        
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App