import React from 'react'
import ym1 from "../../../assets/ym1.jpg"
import ym2 from "../../../assets/ym2.jpg"
import ym3 from "../../../assets/ym3.jpg"
import ym4 from "../../../assets/ym4.jpg"

const Premium = () => {
  

  return (
    <div className="mt-[200px] md:mt-[200px] ">
        <h2 className="py-2 text-center text-5xl uppercase font-bold">Premium Lounge</h2>
        <h3 className="text-center text-2xl uppercase font-bold mb-5">Where luxury meets drip.</h3>
        <div className='h-[170vh] mt-8 w-full'>
            <img className='h-full w-full object-cover object-center' src={ym1}/>
        </div>
    </div>
  )
}

export default Premium