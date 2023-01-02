import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { add, CartItems } from '../redux/reducers/cartReducer'
import { fetchAllProducts, sortByName, sortByPrice } from '../redux/reducers/productReducer'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Products = () => {
  const products = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch()

  const sortName = () => {
    dispatch(sortByName('desc'))
  }

  const sortPrice = () => {
    dispatch(sortByPrice('asc'))
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const addToCart = (product: CartItems) => {
    dispatch(add(product))

  }

  return (
    <>
      <Box marginTop={'20px'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField placeholder='Search Product' color='primary' sx={{ width: '500px' }}
          InputProps={{
            endAdornment: (<InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>)
          }} />
        <FilterAltIcon sx={{ fontSize: '40px', marginLeft: '40px' }} />
        <Box flexDirection={'row'} alignContent={'center'} >
          <Button onClick={() => sortName()}>In Order</Button>
          <Button onClick={() => sortPrice()}>By Price</Button>
        </Box>
      </Box>

      <Grid container spacing={4} margin='20px' width={'fit-content'} >
        {products.map(product => (
          <Grid item xs={6} md={3} >
            <Card sx={{ cursor: 'pointer' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={product.image}
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
  )
}

export default Products