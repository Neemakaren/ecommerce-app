import React from 'react'
import img from '../assets/hero-1.jpg'

const Style = () => {
  return (
    <section className='container mx-auto px-2 my-12'>
        <div className='flex flex-col gap-8 md:gap-10 sm:flex-col md:flex-col lg:flex-row'>
            <div className='w-full space-y-4 sm:w-full md:w-full border-8 border-pink-200 flex flex-col text-center px-10 md:space-y-2 lg:space-y-6'>
                <h2 className='text-center font-extrabold text-2xl md:my-2'>Style Up Your Inbox <br /> For The Holidays</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste quisquam velit magni ipsam, illo sint possimus?</p>
                <input type="text" placeholder='Enter your email address...' className='border-2 border-black w-[80%] mx-auto py-1 pl-2' />
                <h4 className='w-[50%] mx-auto py-1 font-bold rounded-sm text-[1.2em]'>Ship to me!</h4>
                <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, fugit. Omnis, possimus.</p>
                <p className='border-2 border-black w-[30%] mx-auto py-2 font-bold bg-black text-white rounded-sm mb-4'>learn more</p>
            </div>

            <div className='w-full space-y-4  relative'>
                
                 <a href="" className="w-full flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-2 md:h-full">
          <img src={img} alt="" className=" inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 border-4 border-white bg-transparent m-8 z-10 text-2xl flex items-center justify-center">
           
            <p className='text-black font-extrabold border-4 border-white py-2 px-6'>Collections</p>
            </div>
          </a>
            </div>

            
        </div>
    </section>
  )
}

export default Style