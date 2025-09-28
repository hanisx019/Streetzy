import React from 'react'


const WomensSection = () => {
    const womens=[
        {
            _id:"1",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067385/wm2_w915cw.jpg",
            },
        },
        {
            _id:"2",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067359/wm8_b9phy9.jpg",
            },
        },
        {
            _id:"3",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067385/wm6_o2wjgt.jpg",
            },
        },
        {
            _id:"4",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067298/wm1_gktjcc.jpg",
            },
        },
        {
            _id:"5",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067484/wm4_vrgwjf.jpg",
            },
        },
        {
            _id:"6",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067355/wm3_lrsm1p.jpg",
            },
        },
        {
            _id:"7",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067308/wm7_rezata.jpg",
            },
        },
        {
            _id:"8",
            name:"Wide-Leg Trousers",
            price:120,
            image:{
                url:"https://res.cloudinary.com/dfwq8rih1/image/upload/v1759067528/wm5_z5wwl5.jpg",
            },
        },
    ]

  return (
    <div className="mt-[200px] md:mt-[200px] ">
        <h2 className="py-2 text-center text-5xl uppercase font-bold">Top Wear For Womens</h2>
        <h3 className="text-center text-2xl uppercase font-bold">Chic Fits for Every Mood.</h3>
        <div className='flex flex-col gap-6 w-full'>
            {/* Mobile: show only first two images */}
            <div className='flex flex-col lg:flex-row gap-12 px-12 w-full mt-10 md:hidden'>
                {womens.slice(0, 2).map((item) => (
                    <div className='w-full flex-wrap' key={item._id}>
                        <img className='w-full h-100 object-cover rounded-3xl' src={item.image.url} loading="eager" width="300" height="400"/>
                        <h3 className='px-3 pt-2 font-semibold'>{item.name}</h3>
                        <h4 className='px-3 pt-1 font-semibold text-neutral-600'>${item.price}</h4>
                    </div>
                ))}
            </div>
            {/* Desktop/Tablet: show all images as before */}
            <div className='hidden md:flex flex-col lg:flex-row gap-12 px-12 w-full mt-10'>
                {womens.slice(0, 4).map((item) => (
                    <div className='w-full lg:w-1/4' key={item._id}>
                        <img className='w-full h-100 object-cover rounded-3xl' src={item.image.url} loading="eager" width="300" height="400"/>
                        <h3 className='px-3 pt-2 font-semibold'>{item.name}</h3>
                        <h4 className='px-3 pt-1 font-semibold text-neutral-600'>${item.price}</h4>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex flex-col lg:flex-row gap-12 px-12 w-full'>
                {womens.slice(4, 8).map((item) => (
                    <div className='w-full lg:w-1/4' key={item._id}>
                        <img className='w-full h-100 object-cover rounded-3xl' src={item.image.url} loading="eager" width="300" height="400"/>
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
