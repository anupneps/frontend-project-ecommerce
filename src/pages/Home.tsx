import { Box, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Products from '../components/Products';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';


const Home = () => {
    return (
        <Box width={'100%'} height={'auto'}>
            <Card>
                <CardMedia
                    sx={{ height: 200, width: '100%', transform: 'translateY(10px)' }}
                    //   image='https://cdn.pixabay.com/photo/2021/10/24/20/07/christmas-banner-6739203_1280.jpg'
                    image={require('../images/banner.png')}
                />
            </Card>
            <Products />
        </Box>
    );
};

export default Home;