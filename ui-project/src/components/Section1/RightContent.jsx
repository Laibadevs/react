import React from 'react';

import RightCard from './RightCard';

const Right = (props)=>
{
    
    return (
        <div  id="content" className='h-full overflow-auto rounded-4xl flex flex-nowrap gap-10 p-6 w-3/4' >
         
           {props.users.map(function(elem,idx)
            {
              return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
            })}
             
        </div>
    )
}
export default Right