import React from "react";
import {useParams} from 'react-router-dom'
const CoursesDetials=()=>
{
    const params=useParams()
    console.log(params)
    return
    (
        <div>
            <h1>{params.id}Details</h1>
        </div>
    )
}
export default CoursesDetials