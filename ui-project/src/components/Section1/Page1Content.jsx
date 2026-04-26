import React from "react";
import Left from "./LeftConetnt";
import Right from "./RightContent";
const Page1=(props)=>
{
    return(
          <div className="pb-16 pt-16 flex gap-10 items-center h-[90vh] px-18">
            <Left/>
            <Right users={props.users}/>


          </div>
    )
}
export default Page1