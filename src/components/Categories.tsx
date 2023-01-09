import { Box, TextField, InputAdornment, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { Product } from '../types/product'
import MapProducts from './MapProducts'
import { fetchAllProducts, sortByName, sortByPrice } from '../redux/reducers/categoryReducers';
import DividerComponent from './Divider'
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.categoryReducers)
    const [searchProduct, setSearchProduct] = useState('')
    const [searchParam] = useState(['title'])
    const [categoryDisplay, setcategoryDisplay] = useState<Product[]>([])
    const [renderDisplay, setRenderDisplay] = useState(false)

    const sortName = () => {
        dispatch(sortByName('asc'))
    }

    const sortPrice = () => {
        dispatch(sortByPrice('asc'))
    }

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchProduct(e.target.value)
    }

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

    //ref: https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
    const searchProductFn = (products: any) => {
        return products.filter((product: { [x: string]: { toString: () => string; }; }) => {
            return searchParam.some((newItem) => {
                return (
                    product[newItem].toString().toLowerCase().indexOf(searchProduct.toLowerCase()) > -1
                );
            });
        });
    }

    const categoriesOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const buttonValue = e.currentTarget.getAttribute("data-value")
        const newArr: Product[] = []
        products.forEach(element => {
            const name = element.category.name
            if (name === buttonValue) {
                newArr.push(element)
            }
            return newArr
        });
        setcategoryDisplay(newArr)
        setRenderDisplay(true)
    }
    const getAllProducts = () => {
        window.location.reload()
    }

    return (
        <>
            <Box display={'flex'} justifyContent='center' flexDirection={'column'}>
                <Box marginTop={'20px'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TextField onChange={(e) => handleChange(e)} value={searchProduct} placeholder='Search Product' color='primary' sx={{ width: '500px' }}
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
                <Box display={'flex'}
                    justifyContent={'space-around'}
                    alignSelf={'center'}
                    borderRadius={'10px'}
                    width={'100%'}
                    padding={'20px'}
                    marginTop={'40px'}>
                    <Button onClick={getAllProducts} color='primary' variant='outlined' >All Products</Button>
                    <Button data-value={'Clothes'} onClick={categoriesOnClick} color='primary' variant='outlined' >Clothes</Button>
                    <Button data-value={'Electronics'} onClick={categoriesOnClick} color='primary' variant='outlined'>Electronics</Button>
                    <Button data-value={'Furniture'} onClick={categoriesOnClick} color='primary' variant='outlined'>Furniture</Button>
                    <Button data-value={'Shoes'} onClick={categoriesOnClick} color='primary' variant='outlined'>Shoes</Button>
                    <Button data-value={'Others'} onClick={categoriesOnClick} color='primary' variant='outlined'>other</Button>
                </Box>
            </Box>
            <DividerComponent />
            <Grid container spacing={2} width={'auto'} margin={'30px'} marginTop={'10px'}  >
                {renderDisplay ? categoryDisplay.map(renderProduct) : searchProductFn(products).map(renderProduct)}
            </Grid>
        </>
    )
}

export default Categories