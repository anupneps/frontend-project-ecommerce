import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHook';



const Navbar = () => {
    const cartItem = useAppSelector((state: { cartReducer: any; })=>state.cartReducer)
    return (
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between', padding:'20px'}}>
            <span>ORDERLY</span>
            <div>
                <Link to = "/">Home</Link>
                <Link to ="/cart">Cart</Link>
                <span>Cart items:{cartItem.length}</span>
            </div>
        </div>

    )
};

export default Navbar;