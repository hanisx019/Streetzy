import React from 'react'

const CartProducts = () => {

const products=[
  {
    id:1,
    name:"T-shirt",
    size:"M",
    color:"Black",
    price:20,
    image:"https://picsum.photos/200?random=1",
  },
  {
    id:2,
    name:"Pant",
    size:"L",
    color:"yellow",
    price:3000,
    image:"https://picsum.photos/200?random=2",
  },
  {
    id:3,
    name:"Skirt",
    size:"M",
    color:"Blue",
    price:340,
    image:"https://picsum.photos/200?random=3",
        },
        {
            id:4,
            name:"T-shirt",
            size:"XXL",
            color:"Green",
            price:120,
            image:"https://picsum.photos/200?random=4",
        },
        {
            id:5,
            name:"Jeans",
            size:"XL",
            color:"Violet",
            price:270,
            image:"https://picsum.photos/200?random=5",
        },
        {
            id:6,
            name:"shervani",
            size:"S",
            color:"Purple",
            price:20,
            image:"https://picsum.photos/200?random=6",
        },
        {
            id:7,
            name:"Tank Tops",
            size:"M",
            color:"Black",
            price:209,
            image:"https://picsum.photos/200?random=7",
        },
        {
            id:8,
            name:"Jackets",
            size:"L",
            color:"White",
            price:20,
            image:"https://picsum.photos/200?random=8",
        },
    ]

  return (
    <div className=''>
        {products.map((products,index)=>(
        <div key={index} className='flex gap-4 py-2 w-full border-b-1 border-gray-400'>
          <img className='h-20 w-[25%] md:h-22 md:w-[22%] bg-black text-[20px] ml-5 object-cover' src={products.image} loading="lazy" width="80" height="80" />
          <div className='flex w-3/4 justify-between items-center gap-4'>
            <div className='w-[70%]'>
              <div >
                <div className='text-[14px] md:text-[16px] font-semibold '>
                  <h2>{products.name}</h2>
                </div>
                <div className='flex gap-3 text-gray-600 text-[10px] md:text-[14px] items-center'>
                  <span className="flex items-center">
                    <span className="w-[60px] text-nowrap">Size :<span> {products.size}</span></span>
                    <span className="h-4 border-r-2   -ml-4  -mr-1  md:ml-1 md:-mr-1  border-gray-400 "></span>
                  </span>
                  <span className='text-nowrap'>Color : <span>{products.color}</span></span>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-2'>
                <button className=' border-2 border-gray-300 py-1 px-2 rounded-[6px]'>-</button>
                <p className='font-bold'>1</p>
                <button className=' border-2 border-gray-300 py-1 px-2 rounded-[6px]'>+</button>
              </div>
            </div>
            <div className='ml-[-50px] w-[80px] flex flex-col items-center justify-center min-h-[60px]'>
              <h2 className='font-bold -mt-[4px] md:mt-0 text-[15px] md:text-[18px] my-1'>${products.price}</h2>
              <br></br>
              <p className='text-red-900 text-[12px] bg-opacity-10 rounded px-2 py-1 w-full text-center cursor-pointer'>Remove</p>
            </div>
        </div>
      </div>   
        ))}
    </div>
  )
}

export default CartProducts