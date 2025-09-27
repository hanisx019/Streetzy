import React from 'react'
import wm1 from "../../../assets/wm1.jpg"
import wm2 from "../../../assets/wm2.jpg"
import wm3 from "../../../assets/wm3.jpg"
import wm4 from "../../../assets/wm4.jpg"
import wm5 from "../../../assets/wm5.jpg"
import wm6 from "../../../assets/wm6.jpg"
import wm7 from "../../../assets/wm7.jpg"
import wm8 from "../../../assets/wm8.jpg"

const WomensSection = () => {
    const womens=[
        {
            _id:"1",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm1,
            },
        },
        {
            _id:"2",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm2,
            },
        },
        {
            _id:"3",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm3,
            },
        },
        {
            _id:"4",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm4,
            },
        },
        {
            _id:"5",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm5,
            },
        },
        {
            _id:"6",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm6,
            },
        },
        {
            _id:"7",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm7,
            },
        },
        {
            _id:"8",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                src:wm8,
            },
        },
    ]

  return (
    <div className="mt-[200px] md:mt-[200px] ">
        <h2 className="py-2 text-center text-5xl uppercase font-bold">Top Wear For Womens</h2>
        <h3 className="text-center text-2xl uppercase font-bold">Chic Fits for Every Mood.</h3>
        <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-row gap-12 px-12 w-full mt-10'>
                {womens.slice(0, 4).map((item) => (
                    <div className='w-1/4 ' key={item._id}>
                        <img className='w-full h-100 object-cover rounded-3xl' src={item.image.src}/>
                        <h3 className='px-3 pt-2 font-semibold'>{item.name}</h3>
                        <h4 className='px-3 pt-1 font-semibold text-neutral-600'>${item.price}</h4>
                    </div>
                ))}
            </div>
            <div className='flex flex-row gap-12 px-12 w-full'>
                {womens.slice(4, 8).map((item) => (
                    <div className='w-1/4' key={item._id}>
                        <img className='w-full h-100 object-cover rounded-3xl' src={item.image.src}/>
                        <h3 className='px-3 pt-2 font-semibold'>{item.name}</h3>
                        <h4 className='px-3 pt-1 font-semibold text-neutral-600'>${item.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WomensSection
