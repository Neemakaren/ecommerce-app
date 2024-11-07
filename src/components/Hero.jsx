import React from 'react'
import img from '../assets/image.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
<header className="w-full h-screen bg-cover bg-center flex justify-center items-center rounded-2xl image">
<div className="flex flex-row justify-center relative items-center backdrop-blur-sm bg-black/10 w-full h-full text-white">
  <div className='bg-white text-black flex flex-col items-center border-8'>
    <div className='border-2 border-dashed border-black m-6'>
  <h5 data-test="spec header" className='text-2xl sm:text-4xl text-center px-6'>Executively</h5>
       <h1 className='font-extrabold text-center bg-transparent text-[2em] sm:text-[3em] px-8'>Brand <br /> 50% off</h1>
        <hr className='border-6 border-black mx-8 py-3'/>
        <hr className='border-6 border-black mx-12 py-2'/>
        <Link to='/categories'>
       <div className='flex items-center justify-center space-x-4 py-2 border-2 mx-4 my-4'>
       <p className='px-6'>Shop Now</p>
        <AiOutlineArrowRight className="animate-bounce cursor-pointer" />
       </div>
        </Link>

    </div>
  </div>
</div>
</header>
  )
}

export default Hero