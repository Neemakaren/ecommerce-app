import { useContext, useRef,useState, useEffect } from 'react'
import { CartContext } from '../context/cart'
import {AiOutlineArrowLeft, AiOutlineShoppingCart } from 'react-icons/ai'

const CardCarousel = () => {
  const { products, addToCart } = useContext(CartContext)



  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);


  
    
  return (
    <section className='mx-10'> 
        <div className='flex items-center px-5 sm:px-40  my-20'>
            <hr className='border-black border-2 flex-grow border-t'/>
            <span className='px-3 text-[1em] text-black md:text-2xl font-bold'>All Items Under One Roof</span>
            <hr className='border-black border-2 flex-grow border-t'/>
            <hr />
        </div>


        <div className="overflow-hidden">
        <div className="flex justify-between items-center top left w-full h-full">
          <button
            onClick={movePrev}
            className="bg-gray-800 text-white w-10 h-full text-center opacity-75 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
        <div
          ref={carousel}
          className="carousel-container flex gap-4 overflow-hidden scroll-smooth snap-x mb-5 snap-mandatory touch-pan-x z-0"
        >
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 mb-6  h-80 snap-start shadow-lg pl-2 hover:backdrop-blur-sm hover:bg-black/10 cursor-pointer"
              >
                <div
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full aspect-square"
                  />
                  <div className='flex flex-col items-start'>
                  <span className='z-10'>{product.title}</span>
                  <span className='z-10 font-bold'>${product.price}</span>
                  <div className='right-0  w-full flex justify-end p-2 absolute text-[22px] btn:active' onClick={() => addToCart(product)}>
                  <AiOutlineShoppingCart /> 
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
            onClick={moveNext}
            className="bg-gray-800 text-white w-10 h-full text-center opacity-75 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>

        </div>
      </div>


    </section>
    
  )
}

export default CardCarousel

