import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { remove } from '../redux/reducers/cartReducer';

const Cart = () => {
   const cartItems = useAppSelector(state=> state.cartReducer)
   const dispatch = useAppDispatch()
   
   const deleteItem =(productId: number)=>{
      dispatch(remove(productId))
   }

 return (
   <div>
    <h2>Cart</h2>
    <div>
      {cartItems.map(product =>(
         <>
         <img src={product.images[0]} alt="Add to cart"/>
         <h2>{product.title}</h2>
         <h3>{product.price}</h3>
         <button onClick={()=>deleteItem(product.id)}>Delete</button>
         </>
      ))}
    </div>
    </div>
 )   
   
};

export default Cart;