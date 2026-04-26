import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2"

const App =()=>
{
  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfised',
      color:"#22c55e"
    },{
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"UnderServed",
      color:"brown"
    },
    {
      img:"https://images.unsplash.com/photo-1675434301925-67e3a38113cb?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underbanked",
      color:"red"

    }
  ]
  return(
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}
export default App;