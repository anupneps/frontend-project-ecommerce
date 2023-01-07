import { TableContainer, Paper,Table, TableHead, TableRow, TableCell, Button, TableBody, Card, CardMedia, CardActions, Box } from '@mui/material'

import { AxiosResponse } from 'axios'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../hooks/reduxHook'
import { add } from '../redux/reducers/cartReducer'
import axiosInstance from '../shared/axiosInstance'
import { Product } from '../types/product'


const SingleProduct = () => {
    const dispatch = useAppDispatch()
    const [singleProduct, setSingleProduct] = useState<Product>()
    
    const { id } = useParams()

    useEffect(() => {
        axiosInstance.get(`products/${id}`)
            .then((response:AxiosResponse<Product, Error>) => {
                setSingleProduct(response.data)
            })
    }, [id])

    const addToCart = (product: Product) => {
        dispatch(add(product))
    }


    return (
        // <div>
        //     <h1>{product.title}</h1>
        //     <h4>{product.price}</h4>
        //     <h4>{product.description}</h4>
        // </div>
        <TableContainer component={Paper}
           sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                justifySelf: 'center',
                width:'100%',
                position:'relative'
                
            }}>

            <Box sx={{margin:'5%',
                width: '50%',
                overflow:'hidden',
                padding: '20px'}}>
                <Card sx={{ display:'flex', justifyContent:'space-around', margin: '10px', padding:'5px' }}>
                    <CardMedia
                        sx={{ height: 400, width: 400 }}
                    image={singleProduct?.images[1]}
                    />
                    <CardMedia
                        sx={{ height: 400, width: 400 }}
                    image={singleProduct?.images[2]}
                    />
                     <CardMedia
                        sx={{ height: 400, width: 400 }}
                    image={singleProduct?.images[0]}
                    />
                </Card>
                <Table >
                    <TableHead  >
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {'Name'}
                            </TableCell>
                            <TableCell>
                                {singleProduct?.title}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                {'Price '}
                            </TableCell>
                            <TableCell>
                            € {singleProduct?.price}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                {'Description'}
                            </TableCell>
                            <TableCell >
                                {singleProduct?.description}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>
                            {'Category'}
                        </TableCell>
                        <TableCell >
                            {singleProduct?.category.name}
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                <CardActions>
                    {singleProduct?<Button onClick={() => addToCart(singleProduct)} variant='contained'> Add To Cart </Button>:<Button>Add to Cart</Button>}
                    
                </CardActions>
                </Box>
        </TableContainer>

    )
}

export default SingleProduct