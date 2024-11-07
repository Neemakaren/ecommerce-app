import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [categories, setCategories] = useState([])
  const [catProductAll, setCatProductAll] = useState([])
  const [catProductSingle, setCatProductSingle] = useState([])

  // const fetchProducts = async () => {
  //   const res = await fetch("https://dummyjson.com/products?limit=100");
  //   const data = await res.json();
  //   if (data.products && data.products.length) setProducts(data.products);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

//   const fetchCategories = () => {
//     return async function fetchCategoryThunk(dispatch){
//         dispatch(setStatus(STATUS.LOADING));
//         try{
//             const response = await fetch(`${BASE_URL}categories`);
//             const data = await response.json();
//             dispatch(setCategories(data.slice(0, 5)));
//             dispatch(setStatus(STATUS.IDLE));
//         } catch(error){
//             dispatch(setStatus(STATUS.ERROR));
//         }
//     }
// }

// const fetchProductsByCategory = (categoryID, dataType) => {
//   return async function fetchCategoryProductThunk(dispatch){
//       if(dataType === 'all') dispatch(setCategoriesStatusAll(STATUS.LOADING));
//       if(dataType === 'single') dispatch(setCategoriesStatusSingle(STATUS.LOADING));
      
//       try{
//           const response = await fetch(`${BASE_URL}categories/${categoryID}/products`);
//           const data = await response.json();
//           if(dataType === 'all'){
//               dispatch(setCategoriesProductAll(data.slice(0, 10)));
//               dispatch(setCategoriesStatusAll(STATUS.IDLE));
//           }
//           if(dataType === 'single'){
//               dispatch(setCategoriesProductSingle(data.slice(0, 20)));
//               dispatch(setCategoriesStatusSingle(STATUS.IDLE));
//           }
//       } catch(error){
//           dispatch(setCategoriesStatusAll(STATUS.ERROR));
//       }
//   }
// }

const fetchProductsByCategory = async (categoryID, dataType) => {
  setLoading(true);
  const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryID}/products`);
  if(dataType === 'all'){
    setCatProductAll(data.slice(0, 10));
    // dispatch(setCategoriesStatusAll(STATUS.IDLE));
}
if(dataType === 'single'){
  setCatProductSingle(res.data.slice(0, 20));
  // dispatch(setCategoriesStatusSingle(STATUS.IDLE));
}
  // setPosts(res.data);
  // setCategories(res.data)
  setLoading(false);
};

useEffect(() => {
  fetchProductsByCategory();
}, []);

console.log(catProductAll, 'here')


const fetchCategories = async () => {
  setLoading(true);
  const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
  // setPosts(res.data);
  setCategories(res.data)
  setLoading(false);
};

useEffect(() => {
  fetchCategories();
}, []);



  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      // setPosts(res.data);
      setProducts(res.data)
      setLoading(false);
    };

    fetchPosts();
  }, []);


  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setCategories(res.data)
      console.log(categories)
    }
    fetchCategory()
  }, [])


  const handlePageChange = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= products.length / 10 &&
      pageNumber !== page
    )
      setPage(pageNumber);    
  };


  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])



  
  // useEffect(() => {
	// 	const wishlist = JSON.parse(
	// 		localStorage.getItem('wishlist')
	// 	);

	// 	if (wishlist) {
	// 		setFavourites(wishlist);
	// 	}
	// }, []);

	// const saveToLocalStorage = (items) => {
	// 	localStorage.setItem('wishlist', JSON.stringify(items));
	// };

	// const addToWishlist = (item) => {
	// 	const newWishlist = [...favourites, item];
	// 	setFavourites(newWishlist);
	// 	saveToLocalStorage(newWishlist);
	// };

	// const removeFromWishlist = (item) => {
	// 	const newWishlist = wishlist.filter((item) => item.id !== movie.id);

	// 	setFavourites(newWishlist);
	// 	saveToLocalStorage(newWishlist);
	// };



  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        products,
        handlePageChange,
        page,
        setModalData,
        showModal,
        setShowModal, 
        modalData,
        loading,
        categories,
        setCatProductSingle,
        setCategories,
        fetchProductsByCategory,
        fetchCategories
      }}
    >
      {children}
    </CartContext.Provider>
  );
};