import {useContext} from 'react'
import img from '../assets/image.jpg'
import { CartContext } from '../context/cart'
import { useParams } from 'react-router-dom';
import { data } from '../data';

const Product = () => {

  const { products } = useContext(CartContext)
  const {productId} = useParams()

  


  return (
    <>
    <section className='container mx-auto flex flex-col sm:flex-col md:flex-row xl:flex-row lg:flex-row gap-10 py-4 px-8'>
      {
        products
        .filter((prod) => prod.title === productId)
        .map((item, index) => {
          return (
          <div key={index}>
          <img src={item.thumbnail} alt={item.title} className='h-[40em] rounded-md'/>
      <div className='flex flex-col space-y-8'>
          <h2 className='font-bold text-2xl'>{item.title}</h2>
          <p className='font-bold'>{item.description(0, 20)}</p>
          <p className='font-bold'> <span>Price:</span>${item.price}</p>
          <h1>here</h1>
          <p>Quantity</p>
      <div>
          <button className='bg-black text-white py-3 px-5'>Add To Cart</button>
      </div>
      </div>
      </div>)
})}



    </section>


    <div className='flex items-center px-5 sm:px-40  my-10'>
            <hr className='border-black border-4 flex-grow border-t'/>
            <span className='px-3 text-[1em] text-black md:text-2xl font-bold'>You May Also Like</span>
            <hr className='border-black border-4 flex-grow border-t'/>
            <hr />
        </div>

    <div className='card container mx-auto border-x-8'>
          <div className='w-full bg-gray-100'>
          <img src={img} alt="" className='w-full'/>
          <div>
            <h5 className='text-red-600'>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
          <div>
          <img src={img} alt="" />
          <div>
            <h5>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
          <div>
          <img src={img} alt="" />
          <div>
            <h5>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
          <div>
          <img src={img} alt="" />
          <div>
            <h5>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
          <div>
          <img src={img} alt="" />
          <div>
            <h5>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
          <div>
          <img src={img} alt="" />
          <div>
            <h5>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
          <div>
          <img src={img} alt="" />
          <div>
            <h5>cloth</h5>
            <p>Women Clothes</p>
            <p>Price</p>
          </div>
          </div>
        </div>
    </>
  )
}

export default Product