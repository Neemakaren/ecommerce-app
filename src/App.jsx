import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import CategoriesPage from './pages/CategoriesPage'
import Product from './pages/Product'
import PageLoader from './components/PageLoader'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setshowModal] = useState(false);

  setTimeout(() => {
      setIsLoading(false);
  }, 4000);

  const toggle = () => {
    setshowModal(!showModal);
  };

  
  return (
    <>
    {isLoading ? ( <div><PageLoader />
    </div>
  ) : (
    <BrowserRouter>
    <Navbar showModal={showModal} toggle={toggle}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<CategoriesPage />} />
          {/* <Route path='/products/:productId' element={<Product />} /> */}
          
        </Routes>
      </BrowserRouter>
  )}
      
      </>

  )
}

export default App
