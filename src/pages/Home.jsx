import {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CardCarousel from '../components/CardCarousel'
import Products from '../components/Products'
import Products2 from '../components/Products2'
import Style from '../components/Style'
import Trending from '../components/Trending'
import Footer from '../components/Footer'
import { CartContext } from '../context/cart'
import Carousel from '../components/Carousel'

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  
  
  const toggle = () => {
    setshowModal(!showModal);
  };



  return (
    <>
        {/* <Navbar showModal={showModal} toggle={toggle} /> */}
        <Hero />
        <CardCarousel />
        {/* <Products /> */}
        <Products2 />
        <Style />
        <Trending />
        <Footer />
        {/* <Carousel /> */}
    </>
  )
}

export default Home