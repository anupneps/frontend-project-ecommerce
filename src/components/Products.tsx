import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { fetchAllProducts} from '../redux/reducers/productReducer'
import { Product } from '../types/product';
import MapProducts from './MapProducts';
import DividerComponent from './Divider';

const Products = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.productReducer)
  const featuredProductsList = products.slice(11, 23)
  const recommondedProductsList = products.slice(45, 57)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])


  const renderProduct = (product: Product) => {
    return (
      <MapProducts
        key={product.id}
        id={product.id}
        title={product.title}
        images={product.images}
        price={product.price}
        description={product.description}
        category={product.category}
      />
    )
  }


  return (
    <>
      
      <DividerComponent title={'Featured Products'} />
      <Grid container spacing={2} width={'auto'} margin={'30px'} marginTop={'10px'} marginBottom={'80px'}  >
        {featuredProductsList.map(renderProduct)}
      </Grid>
      <DividerComponent title={'Recommended Products'} />
      <Grid container spacing={2} width={'auto'} margin={'30px'} marginTop={'10px'}  >
        {(recommondedProductsList).map(renderProduct)}
      </Grid>
      {/* <Grid container spacing={2} width={'auto'} margin={'30px'} marginTop={'10px'}  >
        {searchProductFn(products).map(renderProduct)}
      </Grid> */}

    </>
  )
}

export default Products