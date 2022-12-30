import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { add } from '../redux/reducers/cartReducer'
import { fetchAllProducts, sortByName } from '../redux/reducers/productReducer'
import { Product } from '../types/product'
import { OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const Products = () => {
  const products = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch()
  console.log("product List: ", products)

  const sortName = () => {
    dispatch(sortByName('desc'))
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const addToCart = (product: Product) => {
    dispatch(add(product))

  }

  return (
    <>
      <Box marginTop={'20px'} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
        <TextField placeholder='Search Product' color='primary' sx={{ width: '500px' }}
          InputProps={{
            endAdornment: (<InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>)
          }} />
          <FilterAltIcon sx={{fontSize: '40px', marginLeft:'40px'}}/>
          <Box flexDirection={'row'} alignContent={'center'} >
            <Button onClick={()=>sortName()}>In Order</Button>
            <Button>By Price</Button>
          </Box>
      </Box>

      <Grid container spacing={4} margin='20px' >
        {products.map(product => (
          <Grid item xs={6} md={3} >
            <Card onClick={() => alert('product!')} sx={{ cursor: 'pointer' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={product.images[0]}
              />

              <CardContent>
                <Typography variant='h6' gutterBottom noWrap >
                  {product.title}
                </Typography>

                <Typography variant='body2' color="text.secondary">
                  € {product.price}
                </Typography>

              </CardContent>

              <CardActions>
                <Button onClick={() => addToCart(product)} variant='contained'> Add To Cart </Button>

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>



    // <div className=''>
    //   {<button onClick={sortName}>Sort</button>}
    //   {products.map(product => 
    //   (<div className='card'><p key = {`${product.id}+${product.title}`}>{product.title}</p>
    //         <img src={product.images[0]} alt="" />
    //         <button onClick={()=>addToCart(product)}>Add To Cart</button>
    //   </div>))}

    // </div>
  )
}


export default Products