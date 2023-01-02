import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { CartItems, increment, decrement, remove } from '../redux/reducers/cartReducer';

const Cart:React.FC = () => {
   let navigate = useNavigate();
    const routeChange = () => {
    navigate('/home');
    }

   const [total, setTotal] = useState<number>(0)
   const cartItems = useAppSelector(state => state.cartReducer)
   const dispatch = useAppDispatch()

   const deleteItem = (product: CartItems) => {
      dispatch(remove(product))
   }

   const handleAddCounter = (productId: CartItems) => {
      dispatch(increment(productId))
   }

   const handleMinusCounter = (productId: CartItems) => {
      dispatch(decrement(productId))
   }

   useEffect(() => {
      setTotal((cartItems.cart.reduce((acc, cur) => acc + cur.subTotal, 0)))
   }, [cartItems.cart])

   return (
      <>
         <Box mb={8} px={4} marginTop='40px' >
            <Typography variant='h4'>
               Shopping Cart
            </Typography>
            <Typography variant='h6' marginTop='40px' marginBottom={'40px'}>
               You have got {cartItems.cart.length} products in Cart
            </Typography>
            <Grid item display={'flex'} flexDirection='row' xs={10} md={8} gap={8} >
               <Grid item display={'flex'} flexDirection='column' justifyContent={'space-evenly'} gap={2} width='100%' alignSelf={'center'}>
                  {cartItems.cart.map(product => (
                     <Card  sx={{ cursor: 'pointer', display: 'flex', padding:'10px'}}>
                        <CardMedia 
                           sx={{ height: 200, width: 200 }}
                           image={product.image}
                        />
                        <CardContent sx={{ textAlign: 'left', width:'40%', padding:'10px'  }}>
                           <Typography variant='body2' gutterBottom  >
                              {product.title}
                           </Typography>

                           <Typography variant='h6' fontWeight={'400'}>
                              € {product.price}
                           </Typography>
                        </CardContent>
                        <CardActions sx={{padding:'10px', width:'20%', display:'flex', justifyContent:'center'}}  >
                           <Button onClick={() => (handleAddCounter(product))} variant='contained' > + </Button>
                           <Typography variant='h6' padding={'5px'} >{product.quantity}</Typography>
                           <Button onClick={() => handleMinusCounter(product)} variant='contained' > - </Button>
                        </CardActions>
                        <Box padding={'10px'} width='20%'><Typography variant='body2'  >
                           SubTotal(€):{(product.subTotal).toFixed(2)}
                        </Typography></Box>
                        
                        <CardActions>
                           <Button onClick={() => deleteItem(product)} variant='contained' > Remove </Button>
                        </CardActions>
                     </Card>
                  ))}
               </Grid>

               <Box width={'50%'} alignItems='center' height={'max-content'} flexDirection='column' justifyContent={'center'} >
                  {cartItems.cart.length < 1 ? <Typography variant='h6' margin={'10px'}>Your cart is empty !</Typography> :
                     <>
                        <Typography variant='h5' fontWeight={'700'} marginBottom={'20px'}>Summary</Typography>
                        <Typography variant='h6' fontWeight={'700'} margin={'10px'}>Total items: <span style={{ marginLeft: '20px' }} >{cartItems.cart.length}</span> </Typography>
                        <Typography variant='h6' fontWeight={'700'} margin={'10px'}>Total Price: <span style={{ marginLeft: '20px' }} >€ {total.toFixed(2)}</span></Typography>
                     </>}
                  {total ? <Button sx={{ margin: '10px' }} variant='contained' color='primary' >CheckOut</Button> : ""}
                  <Link onClick={routeChange} sx={{ margin: '10px', cursor:'pointer' }} >Continue Shopping</Link>
               </Box>
            </Grid>
         </Box>
      </>
   )
};

export default Cart;

