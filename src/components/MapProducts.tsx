import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../types/category'

export interface ProductInterface {
    key?: number
    id: number
    title: string
    description: string
    price: number
    category: Category
    images: string[]
}

const MapProducts = (product: ProductInterface) => {
    const cardOnHover = {
        transition: "transform 1s ease ",
            overflow: 'hidden',
        ":hover": {
            transform: 'scale(0.95)',

        }
    }
    

    return (
        <Grid key={product.key} item xs={6} md={2} sx={cardOnHover} >
            <Card sx={{ cursor: 'pointer'}}>
                <Link to ={`/products/${product.id}`} > <CardMedia
                    sx={{ height: 200 }}
                    image={product.images[1]}
                /></Link>
                <CardContent>
                    <Typography variant='h6' gutterBottom noWrap >
                        {product.title}
                    </Typography>

                    <Typography variant='body2' fontWeight={'bold'} color="text.secondary">
                        € {product.price}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                <Button onClick={() => addToCart(product)} variant='contained'> Add To Cart </Button>
              </CardActions> */}
            </Card>
           
        </Grid>
    )
}

export default MapProducts