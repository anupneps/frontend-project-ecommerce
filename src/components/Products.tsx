import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { add } from '../redux/reducers/cartReducer'
import { deleteItem, fetchAllProducts, sortByName } from '../redux/reducers/productReducer'


const Products = () => {
const products = useAppSelector(state=> state.productReducer)
const dispatch = useAppDispatch()
console.log("product List: ", products)

const sortName = () =>{
    dispatch(sortByName('desc'))
    
  }

  useEffect(()=>{
   dispatch(fetchAllProducts())
  }, [])

  const addToCart = ()=>{
    dispatch(add)

  }
  
    return (
      <div className='productsWrapper'>
        {<button onClick={sortName}>Sort</button>}
        {products.map(product => 
        (<div className='card'><p key = {`${product.id}+${product.title}`}>{product.title}</p>
              <img src={product.images[0]} alt="" />
              <button onClick={addToCart}>Add To Cart</button>
        </div>))}
       
      </div>
    )
  }


export default Products