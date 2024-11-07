import {useState, useContext, useEffect} from 'react'
import img from '../assets/image.jpg'
import { CartContext } from '../context/cart';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import List from '../components/List';
import '../styles.css'
import Categories from '../components/Categories';


const CategoriesPage = () => {
  const { products, handlePageChange, page } = useContext(CartContext)
  const [searchTerm, setSearchTerm] = useState('')
  

  // const uniqueObj = [...new Set(products.map(obj => obj.category))].map(category => {
  //   return products.find(obj => obj.category === category)
  // })

  
  const toggleWishlist =() => {
    setWishlist(!wishlist)
  }


  // const uniqueObj = ['all',...new Set(products.map(obj => obj.category))]

  const [categories, setCategories] = useState([])
  const [categoryProducts, setCategoryProducts] = useState(products)


  // setCategories('all', ...uniqueObj)



  // const filterItems = (category) => {
  //   // if(category === 'all') {
  //   //   setCategoryProducts(products)
  //   //   return
  //   // }
  //   // const newItems = products.filter((job) => job.category === category)
  //   // setCategoryProducts(newItems); 
  //   // console.log(categoryProducts)

  // console.log( uniqueObj.filter((job) => job.category === category))
  // console.log('first')
  // }



  return (
    // <section className='container mx-auto max-h-full flex flex-col sm:flex-col md:flex-row xl:flex-row lg:flex-row maxx'>
    <section className='container mx-auto bg-white shadow-none'>
        {/* <div className=' h-full'>
          <h3>New Arrivals</h3>
          <div className='flex flex-row flex-wrap gap-2 sm:flex-col md:flex-col'>
            <h4 className='font-bold'>Categories:</h4>
            {
              uniqueObj.map((product) => (
                <div key={product.id} className='shadow-lg'>
                  <p className='my-2 cursor-pointer' onClick={() => filterItems(product)}>{product.category}</p>
                </div>
              ))
            }
          </div>
        </div> */}

        <div>
          <div className='p-6 w-full'>
            <input 
              type="text" 
              placeholder='Type to search item....' 
              className='border-2 border-black w-[100%] rounded-md py-4 pl-3'
              onChange={(e) => setSearchTerm(e.target.value)}
               />
            {/* <button className='border-2 border-black py-4 px-5'>Search</button> */}
            </div>

            <Categories />

            <List searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            
            {/* <div className='w-full'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 p-6'>
              {
                products.map((product, id) => (
                 <Link key={id} to={`categories/${product.id}`}>
                  <div className='w-full h-full bg-gray-100'>
                  <img src={product.images[0]} alt="" className='w-full h-[350px]'/>
                  <div>
                    <h5 className='text-red-600'>cloth</h5>
                    <p>{product.title}</p>
                    <p>Price: {product.price}</p>
                  </div>
                  <button className='bg-black text-white px-6 py-2'>Add To Cart</button>
                  </div>
                  </Link>
                ))
              }
              
        </div>
            </div> */}
        </div>
    </section>
  )
}

export default CategoriesPage;