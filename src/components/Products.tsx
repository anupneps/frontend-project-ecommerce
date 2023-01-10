import { Box, Button, Grid, Link } from '@mui/material'
import { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'

import { createProduct, fetchAllProducts } from '../redux/reducers/productReducer'
import { Product } from '../types/product';
import MapProducts from './MapProducts';
import DividerComponent from './Divider';
import { CreateProduct } from '../types/createProduct';

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
  const boxLayout = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid orange',
    marginTop:'30px',
    padding: '5px',
    width: '100%',
    marginLeft: '1%',
    marginRight: '1%'
  }

  return (
    <>
      <DividerComponent title={'Featured Products'} />
      <Grid container spacing={2} width={'auto'} margin={'30px'} marginTop={'10px'}>
        {featuredProductsList.map(renderProduct)}
        <Box sx={boxLayout} ><Link href='/categories'><Button>More..</Button></Link></Box>
      </Grid>
      <DividerComponent title={'Recommended Products'} />
      <Grid container spacing={2} width={'auto'} margin={'30px'} marginTop={'10px'}>
        {(recommondedProductsList).map(renderProduct)}
        <Box sx={boxLayout} > <Link href='/categories'><Button>More..</Button></Link> </Box>
      </Grid>
      </>
  )
}

export default Products