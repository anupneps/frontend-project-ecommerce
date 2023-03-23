import { Grid, Stack, Typography, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useAppDispatch } from "../hooks/reduxHook";
// import { createProduct, createProductWithForm } from "../redux/reducers/productReducer";
import { CreateProduct } from "../types/createProduct";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


const schema = yup.object({
    title: yup.string().required('Title cannot be empty').min(6),
    price: yup.number().positive().max(10000).required('Price cannot be empty'),
    description: yup.string().required('Description cannot be empty'),
    categoryId: yup.number().positive().integer().required('Category ID cannot be empty').max(10),
    images: yup.string().required('At least one image is required')

}).required()

const CreateNewProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<CreateProduct>({
        resolver: yupResolver(schema)
    });

    // const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<CreateProduct> = (data) => {
        // dispatch(createProduct(
        //     {
        //         'title': `${data.title}`,
        //         'price': data.price,
        //         'description': `${data.description}`,
        //         'categoryId': data.categoryId,
        //         'images': ['https://cdn.pixabay.com/photo/2012/04/12/19/05/coat-30208__340.png']
        //     }
        // ))
        // dispatch(createProductWithForm({
        //     image: data.images,
        //     product: {
        //         'title': `${data.title}`,
        //         'price': data.price,
        //         'description': `${data.description}`,
        //         'categoryId': data.categoryId,
        //     }

        // }))

        console.log(data.images)
        reset()
    }

    return (
        <Grid item md={4} sx={{
            height: '100%',
            marginTop: '5%',
            marginBottom: '10%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Stack spacing={1} padding='20px' sx={{ width: '500px', border: '2px solid grey' }}>
                    <Typography align='center' variant='h4' > Create Product  </Typography>
                    <TextField {...register("title")} variant='outlined' label='Title' type='text'></TextField>
                    <Typography>{errors.title?.message} </Typography>
                    <TextField {...register("price", { min: 0, max: 10000 })} variant='outlined' label='Price' type='number'></TextField>
                    <Typography>{errors.price?.message} </Typography>
                    <TextField {...register("description")} variant='outlined' label='Description' type='text'></TextField>
                    <Typography>{errors.description?.message} </Typography>
                    <TextField {...register("categoryId")} variant='outlined' label='Category Id' type='number'></TextField>
                    <Typography>{errors.categoryId?.message} </Typography>
                    <TextField variant="outlined" label="Upload Images" disabled ></TextField>
                    <TextField {...register(`images.${0}`)} type='file' inputProps={{ multiple: true }}></TextField>
                    {/* <Typography>{errors.images?.message} </Typography>  */}
                    <Button type="submit" sx={{ bgcolor: '#FFC108' }} variant='contained'>Create Product</Button>
                    <Button type="submit" sx={{ bgcolor: '#FFC108' }} variant='contained'>Cancel</Button>
                </Stack>

            </form>
        </Grid>


    );
}

export default CreateNewProduct