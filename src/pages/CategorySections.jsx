import {useEffect, useContext, useDispatch} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart';

const CategorySections = () => {
    const {id} = useParams();

    const { products, fetchProductsByCategory, fetchCategories } = useContext(CartContext)

    useEffect(() => {
        fetchProductsByCategory(id, 'single');
      }, [id]);


  return (
    <div className = "category-page">
        {/* <div className = "container">
          <div className = "breadcrumb">
            <ul className = "breadcrumb-items flex">
              <li className = "breadcrumb-item">
                <Link to = "/">
                  <i className = "fas fa-home"></i>
                  <span className = "breadcrumb-separator">
                    <i className = "fas fa-chevron-right"></i>
                  </span>
                </Link>
              </li>
              <li>
                Category
                <span className = "breadcrumb-separator">
                  <i className = "fas fa-chevron-right"></i>
                </span>
              </li>
              <li>
                { products[0] && products[0].category.name}
              </li>
            </ul>
          </div>
        </div> */}
        {/* <ProductList products = {products} status = {status} /> */}

        {products
            .filter((item) => item.id === id)
            .map((item, index) => (
              <div key={index}>
                <img src={item.imgUrl}
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[100%] w-full'
            />
               
              </div>
            ))}
      </div>
  )
}

export default CategorySections