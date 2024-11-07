import {useContext} from 'react'
import { CartContext } from '../context/cart'
import {FaShoppingBag} from 'react-icons/fa'
import {AiOutlineClose } from 'react-icons/ai'



const Modal = () => {
  const { products, page, handlePageChange, addToCart, setModalData, showModal, setShowModal, modalData } = useContext(CartContext)

  

  return (
    <section className='fixed inset-0 select-none flex-col flex items-center overflow-y-auto scroll-smooth'>
      <div className="flex-col flex items-center  z-50 container mx-auto border-2 rounded-md bg-white  text-black dark:text-white font-normal uppercase text-sm">
        <div type = "button" className='p-1 bg-black text-white absolute rounded-xl ' onClick={() => setShowModal(false)}>
          <AiOutlineClose className=''/>
        </div>
        <div className = "flex flex-col sm:flex-col md:flex-row gap-9 py-10 px-4">
          {/* details left */}
            <div className = "h-full w-full object-cover">
              <img src = {modalData.images[0]} alt = {modalData.title} className='' />
            </div>
          {/* detials right */}
            <div className = "flex flex-col space-y-8 px-6">
              <h3 className = "font-bold text-2xl">{modalData.title}</h3>
              <p className='leading-7'>{modalData.description}</p>
              <div type = "" className='flex flex-row space-x-3 items-center px-2' onClick={() => addToCart(modalData)}>
                  <span className = "text-2xl">
                    <FaShoppingBag />

                  </span>
                  <button className = 'bg-[rgb(70,70,70)] px-8 py-2 text-white rounded-sm'>Add To Cart</button>
              </div>
            </div>
        </div>
      </div>
    </section> 
  )
}

export default Modal