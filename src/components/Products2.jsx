import React from 'react'
import img from '../assets/img-1.jpg'
import img1 from '../assets/img-2.jpg'
import img2 from '../assets/img-3.jpg'
import img3 from '../assets/img-4.jpg'
import img4 from '../assets/img-6.jpg'
import img5 from '../assets/hero-1.jpg'

const Products2 = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 md:gap-2 xl:gap-4 container mx-auto shadow-none bg-white">
            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm md:h-80">
                <img src={img} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
                    <div className='bg-white text-black flex flex-col items-center absolute border-4'>
                        <div className='border-2 border-dashed border-black m-2'>
                    <h5 data-test="spec header" className='text-2xl sm:text-2xl text-center px-2'>Executively</h5>
                        <h1 className='font-extrabold text-center bg-transparent sm:text-[1em] px-8'>LINXX BUCKLE</h1>
                            <hr className='border-6 border-black mx-8 py-1'/>
                        </div>
                    </div>

            </a>
           
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm md:col-span-2 md:h-80">
                <img src={img4} loading="lazy" alt="" className="absolute" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Gadgets</span>
            </a>
            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm  md:col-span-2 md:h-80">
                <img src={img3} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Interior Decor</span>
            </a>
            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm md:h-80">
                <img src={img2} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Bags</span>
            </a>
           
        </div>
    </div> 
  )
}

export default Products2