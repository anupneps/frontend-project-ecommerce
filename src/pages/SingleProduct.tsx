import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, Button, TableBody, Card, CardMedia, CardActions, Box } from '@mui/material'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'

import { add } from '../redux/reducers/cartReducer'
// import { deleteAproduct } from '../redux/reducers/productReducer'
import axiosInstance from '../shared/axiosInstance'
import { Product } from '../types/product'

const SingleProduct = () => {
    const dispatch = useAppDispatch()
    const userAuthentication = useAppSelector(state => state.authenticationReducer)
    const [singleProduct, setSingleProduct] = useState<Product>()
    const { id } = useParams()
    const navigate = useNavigate()
    const reRoute = () => {
        navigate('/')
    }

    useEffect(() => {
        axiosInstance.get(`products/${id}`)
            .then((response: AxiosResponse<Product, Error>) => {
                setSingleProduct(response.data)
            })
    }, [id])

    const addToCart = (product: Product) => {
        dispatch(add(product))
    }
    // const deleteProduct = (id)=>{
    //     dispatch(deleteAproduct(`products/${id}`))
    // }

    return (
        <TableContainer component={Paper}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                justifySelf: 'center',
                width: '100%',
                position: 'relative'
            }}>

            <Box sx={{
                margin: '5%',
                width: '50%',
                overflow: 'hidden',
                padding: '20px'
            }}>
                {singleProduct ? <Button onClick={() => (reRoute())} variant='contained'> Back </Button> : <Button></Button>}
                <Card sx={{ display: 'flex', justifyContent: 'space-around', margin: '10px', padding: '5px' }}>
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
                    {singleProduct ? <Button onClick={() => addToCart(singleProduct)} variant='contained'> Add To Cart </Button> : <Button>Add to Cart</Button>}
                    {singleProduct && userAuthentication.isAuthenticated && userAuthentication.user?.role === 'admin' ? <Button onClick={() => alert('clicked')} variant='contained'> Edit </Button> : ''}
                    {singleProduct && userAuthentication.isAuthenticated && userAuthentication.user?.role === 'admin' ? <Button onClick={() => alert(alert(singleProduct))} variant='contained'> Delete </Button> : ''}
                </CardActions>
            </Box>
        </TableContainer>

    )
}

export default SingleProduct