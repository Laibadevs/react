import React from 'react';
import Hero from './Hero';
import Arrow from './Arrow';
const Left = ()=>
{
    return (
        <div className='h-full w-1/3 flex flex-col justify-between  text-6xl '  >

        <Hero/>
        <Arrow/>
                 
        </div>
    )
}
export default Left