import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { add } from '../redux/reducers/cartReducer'
import { fetchAllProducts, sortByName, sortByPrice } from '../redux/reducers/productReducer'
import { Product } from '../types/product';

const Products = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.productReducer)
  const featuredProductsList = products.slice(11, 40)
  // const recommondedProductsList = products.slice(345)

  const sortName = () => {
    dispatch(sortByName('asc'))
  }

  const sortPrice = () => {
    dispatch(sortByPrice('asc'))
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const addToCart = (product: Product) => {
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
      <Typography variant='h4' marginLeft={'50px'} >Featured Products</Typography>
      <Grid container spacing={4} width={'fit-content'} >
        {featuredProductsList.map(product => (
          <Grid key={product.id} marginLeft='50px' item xs={6} md={'auto'} >
            <Card sx={{ cursor: 'pointer' }}>
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
  )
}

export default Products