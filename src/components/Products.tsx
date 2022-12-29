import  { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { add } from '../redux/reducers/cartReducer'
import {fetchAllProducts, sortByName } from '../redux/reducers/productReducer'
import { Product } from '../types/product'


const Products = () => {
const products = useAppSelector(state=> state.productReducer)
const dispatch = useAppDispatch()
console.log("product List: ", products)

const sortName = () =>{
    dispatch(sortByName('desc'))
  }

  useEffect(()=>{
   dispatch(fetchAllProducts())
  }, [dispatch])

  const addToCart = (product:Product)=>{
    dispatch(add(product))

  }
  
    return (
      <div className='productsWrapper'>
        {<button onClick={sortName}>Sort</button>}
        {products.map(product => 
        (<div className='card'><p key = {`${product.id}+${product.title}`}>{product.title}</p>
              <img src={product.images[0]} alt="" />
              <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>))}
       
      </div>
    )
  }


export default Products