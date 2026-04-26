import React from "react";
import { MoveRight } from 'lucide-react';
const RightCardContent=(props)=>
{
    return(
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
                <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold">
                  {props.id+1}
                </h2>
                <div>
                  <p className=" text-shadow-2xs text-xl text-white mb-12 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic
                    obcaecati voluptatum ullam maiores alias
                  </p>
                  <div className="flex justify-between">
                    <button  style={{backgroundColor:props.color}}className= "text-white font-medium px-8 py-2 rounded-full ">{props.tag}</button>
                    <button className=" text-white font-medium px-4 py-2 rounded-full "><MoveRight /></button>
                  </div>
                </div>
              </div>
    );
};
export default RightCardContent