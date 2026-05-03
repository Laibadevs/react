import React from "react";
const Navbar=()=>
{
  return(
    <div className="flex py-4 px-8 bg-cyan-800 justify-between">
        <h2 className="text-md font-bold">StudyMate</h2>
        <div className="flex gap-8">
            <a className="text-md font-bold" href="">Home</a>
            <a  className="text-md  font-bold"        href="/about">About</a>
            <a  className=" text-md font-bold"href="/product">Product</a>
            <a  className=" text-md font-bold"href="/courses">Courses</a>
           
        </div>
    </div>
  )
}
export default Navbar