import React from 'react'

function Hero() {
  return (
    <main className='flex justify-center items-center w-[1125px] h-[613px] mx-auto'>
        <div className='flex flex-col items-center'>
            <h1 className='font-poppins font-extrabold uppercase text-8xl text-center'>YOUR FEET DESERVE <br></br> THE BEST</h1>
            <p className='my-6 font-semibold text-gray-600'>YOUR FEET DESERVE THE BEST AND WE ARE HERE <br></br>TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br></br>THE BEST AND WE ARE HERE TO HELP YOU WITH OUR<br></br> SHOES.</p>

            <div className='flex gap-3 justify-around my-6'>
                <button className='bg-red-600 border text-white h-[40px] px-6 py-4 rounded-sm text-center '>Shop Now</button>
                <button className='border-2'>Category</button>
            </div>

            <div className='flex'>
                <p className='font-bold text-gray-600'>Also Available on</p>
                
                <img className='' src='.\public\flipkart.png'/>
                <img src='.\public\amazon.png'/>
            </div>
        </div>
        <div className=''>
            <img src='.\public\shoe_image.png'/>
        </div>
    </main>
  )
}

export default Hero