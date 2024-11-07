import {useContext} from 'react'
import { CartContext } from '../context/cart'
import { Link } from 'react-router-dom'



const Categories = () => {
    const {  categories } = useContext(CartContext)

  return (
    <section className = "" id = "categories">
       
            
                <div className='section-title'>
                    <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
                </div>
                <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2 p-6 gap-4">
                    {
                        categories.slice(0, 5).map(category => (
                            <Link to = {`category/${category.id}`} key = {category.id}>
                                <div className = "w-full" >
                                    <div className='object-cover rounded-md shadow-xl'>
                                        <img src = {category.image} alt = "" />
                                    </div>
                                    <div className = "category-item-name text-center">
                                        <h6 className='fs-20'>{category.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                </div>
        
    </section>
  )
}

export default Categories