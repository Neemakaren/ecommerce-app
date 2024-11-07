import {useState, useContext} from 'react'
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart';
import Cart from './Cart';



const Navbar = ({showModal, toggle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useContext(CartContext)

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <nav className='shadow-lg'>
        <div className='flex items-center justify-between text-[.5em] md:text-[.7em] bg-[rgb(70,70,70)] text-white py-1 px-4'>
        <p>523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA</p>
        <p>+1 (234) 56789, +1 987 654 3210</p>
        <p>support@company.com</p>
        <p className='flex space-x-3'>
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
        </p>
    </div>
    <div className="w-full p-2 z-10 bg-transparent">
         <div className="flex items-center justify-between lg:justify-evenly">  
      <div className="hidden sm:hidden space-x-6 md:flex text-black items-center list-none">
        <Link to='/' data-test="this header" className=" hover:text-darkGrayishBlue cursor-pointer">Home</Link>
        <Link to='/categories' className="hover:text-darkGrayishBlue cursor-pointer">Categories</Link>
        <li to='/blogpage'className="hover:text-darkGrayishBlue cursor-pointer" >Videos</li>
        </div>
        <div className='flex items-center'>
            <hr className='border-black border-8 flex-grow border-t'/>
            <span className='px-2 text-[1em] text-black md:text-2xl font-bold'>MARINO</span>
            <hr className='border-black border-8 flex-grow border-t'/>
            <hr />
        </div>
      <div className='hidden sm:hidden space-x-6 md:flex text-black items-center list-none'>
      <li to='/blogpage'className="hover:text-red cursor-pointer" >Gallery</li>
      <li to='/blogpage'className="hover:text-darkGrayishBlue cursor-pointer" >Blog</li>
      <li to='/blogpage'className=" hover:text-darkGrayishBlue cursor-pointer" >Shop</li>


      

      {!showModal && <button data-test="show modal" className='px-4 py-2 flex flex-row gap-3 bg-gray-800 text-white text-xs font-bold uppercase rounded right-2 fixed z-50  hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggle}
        >
          <AiOutlineShoppingCart className='text-2xl' data-test="open cart"/>
          
           ({cartItems.length})</button>}
      </div>

     
      <Cart showModal={showModal} toggle={toggle}/>

     
      
      <button className='flex flex-row items-center justify-center text-2xl cursor-pointer transition-all duration-0.3 linear md:hidden lg:hidden text-black' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>


          </div>

          <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex " : "hidden"} cursor-pointer bg-transparent w-[50%] lg:hidden flex-col fixed right-0 min-h-full items-start transition duration-5 z-10 text-[1em] space-y-6 mt-4 text-black`}
        >
          <ul className=' w-full space-y-4 mt-6 pb-4 px-4 py-4 items-start font-bold uppercase bg-gray-100'>
          <li>Home</li>
          <li>Categories</li>
          <li>Events</li>
          <li>videos</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Contact</li>
          </ul>
          {!showModal && <button data-test="show modal" className='px-4 py-2 flex flex-row gap-3 bg-gray-800 text-white text-xs font-bold uppercase rounded right-2 fixed z-50  hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggle}
        >
          <AiOutlineShoppingCart className='text-2xl' data-test="open cart"/>
          
           ({cartItems.length})</button>}
        </div>
          
    </div>
    </nav>
  )
}

export default Navbar




