import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
// import { remove } from '../redux/reducers/cartReducer';

const Cart = () => {
   
   const [counter, setCounter]=useState<number>(0)
   const [subtotal, setsubTotal]= useState<number[]>([])
   const cartItems = useAppSelector(state => state.cartReducer)
   const dispatch = useAppDispatch()

   // const deleteItem = (productId: number) => {
   //    dispatch(remove(productId))
   // }

   console.log(cartItems)

   const handleAddCounter =()=>{
   //   quantity++      
      // setsubTotal(counter*total) 
      setCounter(counter+1)
   }   
  
   return (
      
      <>
         <Box mb={8} px={4} marginTop='40px' >
            <Typography variant='h4'>
               Shopping Cart
            </Typography>
            <Typography variant='h6' marginTop='40px' marginBottom={'40px'}>
               You have got {cartItems.length} Products in Cart
            </Typography>
            <Grid item display={'flex'} flexDirection='row' xs={10} md={8} gap={8} >
               <Grid item display={'flex'} flexDirection='column' gap={2} width='40vw'>
                  {cartItems.map(product => (
                     <Card sx={{ cursor:'pointer', display:'flex', alignContent:'center', justifyContent:'space-between' }}>
                        <CardMedia
                           sx={{ height: 200, width: 200 }}
                           image={product.images[0]}
                        />

                        <CardContent sx={{textAlign:'left'}}>
                           <Typography variant='h6' gutterBottom flexWrap={'wrap'} >
                              {product.title}
                           </Typography>

                           <Typography variant='body2' color="text.secondary">
                              € {product.price}
                           </Typography>

                        </CardContent>
                        <CardActions  >
                        <Button onClick={() => handleAddCounter()} variant='contained' > + </Button>
                        <Typography variant='h6' padding={'5px'} >{ counter}</Typography>
                        <Button onClick={() => handleAddCounter()} variant='contained' > - </Button>
                        </CardActions>

                        <Typography>
                        {/* SubTotal: {product.quantity !== undefined ? product.quantity * product.price : product.price} */}
                     
                  </Typography>


                         {/* <CardActions>
                           <Button onClick={() => deleteItem(product.id)} variant='contained' > Remove </Button>
                        </CardActions>  */}

                        

                     </Card>
                     
                  ))}
               </Grid>
               <Box>
                  <Typography>Total</Typography>
                  {/* {total = subtotal.reduce((acc, cur)=> acc+cur, 0)} */}
                  {/* <Typography>€ {total+subTotal}</Typography> */}
                  {subtotal}
               </Box>
            </Grid>


         </Box>

 
         </>
      // <div>
      //  <h2>Shopping Cart</h2>
      //  <p>You have got {cartItems.length} Products in Cart </p>
      //  <div>
      //    {cartItems.map(product =>(
      //       <div key={product.id}>
      //       <img src={product.images[0]} alt="Add to cart"/>
      //       <h2>{product.title}</h2>
      //       <h3>{product.price}</h3>
      //       <button onClick={()=>deleteItem(product.id)}>Delete</button>
      //       </div>
      //    ))}
      //  </div>
      //  </div>
   )

};

export default Cart;