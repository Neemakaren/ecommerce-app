import {useContext} from 'react'
import { CartContext } from '../context/cart'
import Modal from './Modal'
import Loader from './Loader'



const List = ({searchTerm, setSearchTerm}) => {
  
    const { products, page, handlePageChange, addToCart, setModalData, showModal, setShowModal, modalData, loading } = useContext(CartContext)


    const viewModalHandler = (data) => {
      setModalData(data);
      setShowModal(true);
  }

  if(loading) return <Loader />
    
  return (
    <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6' data-test="product-tag">
      {showModal && <Modal />}
      <h1>All Categories</h1>
     
      {products.length && (
        <ol className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2 p-6 gap-4 bg-gray-100'>
          {products
          .slice(0, 40)
          .filter((val) => {
            if(searchTerm == '') {
              return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            } 
          })
          .map((product) => (
            <li key={product.id} className="w-full p-2 rounded-sm py-6 bg-white px-5 cursor-pointer " onClick = {() => viewModalHandler(product)}>
            
              <div className=''>
              <img src={product.images[0]} alt={product.title} className='w-full' />
              </div>
              <h4  data-test={`product-name-${product.id}`}>{product.title}</h4>
              <p className='text-[#212529] text-[16px] font-extrabold py-2'  data-test={`product-price-${product.id}`}>Ksh:{product.price.toFixed(2)}</p>
              <div className='right-0 flex justify-end pr-2 text-[22px]' onClick={() => addToCart(product)}>
                  </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default List