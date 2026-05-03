import React from "react";
const Navbar=(props)=>
{   function changetheme()
    {
        console.log("settheme",theme)
        props.setTheme('dark')
    }
    return(
        <div>
           
            <button onClick={()=>
                {
                    changetheme
                }
            }>Change Theme</button>
        </div>
    )
}
export default Navbar