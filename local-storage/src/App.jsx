import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response);
  // }
  // const getData= async()=>{
  //     const response= await fetch('https://jsonplaceholder.typicode.com/todos/10')
  //     const data=await response.json();
  //     console.log(data)
  // }
  const [data,setData]=useState([])
  const getData=async()=>{
  // const {data}= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(data)
   const response=await axios.get('https://picsum.photos/v2/list')
   setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <button>Hello</button>
      <div>
         {data.map(function(elem)
         {
            return <h3>hello,{elem.author}</h3>
         })}
      </div>
    </div>
  );
}

export default App;