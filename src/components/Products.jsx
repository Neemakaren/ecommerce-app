import React from 'react'
import img from '../assets/image.jpg'

const Products = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Bento Grid Layout with Images</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden shadow-lg group">
                <img src={img} alt="Nature" className="w-full h-full object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
                        <p className="text-white">Discover the beauty of the natural world</p>
                    </div>
                </div>
            </div>

            <div className="relative md:row-span-2 overflow-hidden shadow-lg group">
                <img src={img} alt="Food" className="w-full h-full object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Culinary Delights</h4>
                    </div>
                </div>
            </div>
            {/* <div className="relative overflow-hidden  shadow-lg group">
                <img src={img} alt="Technology" className="w-full h-full object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Tech Innovations</h4>
                    </div>
                </div>
            </div> */}

    
            <div className="relative overflow-hidden shadow-lg group">
                <img src={img} alt="Travel" className="w-full h-full object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Travel Adventures</h4>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden shadow-lg group">
                <img src={img} alt="Art" className="w-full h-full object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Artistic Expressions</h4>
                    </div>
                </div>
            </div>

          
            <div class="relative md:col-span-2 overflow-hidden shadow-lg group">
                <img src={img} alt="Sport" class="w-full h-48 object-cover"/>
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Swimming</h4>
                    </div>
                </div>
            </div>
            <div class="relative md:col-span-2 overflow-hidden shadow-lg group">
                <img src={img} alt="Sport" class="w-full h-48 object-cover"/>
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Chess</h4>
                    </div>
                </div>
            </div>
            {/* <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src={img} alt="Sport" class="w-full h-48 object-cover"/>
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Football</h4>
                    </div>
                </div>
            </div> */}
            {/* <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src={img} alt="Sport" class="w-full h-48 object-cover"/>
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Cricket</h4>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Products