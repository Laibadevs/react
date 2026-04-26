import React from 'react';
const App=()=>
{
  function btnClicked() {
      console.log("btn is clicked")
    }
  // function mouseEnter()
  // {
  //   console.log("Mouse is Enter")
  // }
  function inputChanging(val) {
    console.log(val)
  }
  const pageScrolling=(elem)=>
  { if (elem>0)
   {
    console.log(" page scrolling ..... at speed",elem)}
    else
    {
      console.log("page scrolling");
    }
  }
  return(
       <div>
        <button onMouseEnter={function () {
          console.log("Mouse is enter")
          
        }} onClick={btnClicked}>Click Here</button>
        <button onDoubleClick={btnClicked}>Click Here</button> 
         {/* btnclicked ky saath agr ma () ya lga do tu ya khud hi automatic run hojaya btn clicked karny sy phely hi */}
        <input onClick={function(elem)
          {
            inputChnaging(elem.target.value)
          }
        }type="text" placeholder="Enter your name"/>
        <div onMouseMove={(elem)=>{
          console.log(elem.clientX)
        }} className="box">

        </div>
        <div onWheel={(elem)=>
          {
            pageScrolling(elem.deltaY)
          }
        }>
         <div className="page1"></div>
         <div className="page2"></div>
         <div className="page3"></div>
         </div>
         
        </div>


  )
}
export default App