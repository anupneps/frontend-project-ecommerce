import { CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Products from '../components/Products';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';

const Home = () => {

    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state=>state.authenticationReducer.user)
    
    return (
        <>
       <Card>
        <CardMedia 
              sx={{ height: 200, width:'100%' }}
              image='https://cdn.pixabay.com/photo/2021/10/24/20/07/christmas-banner-6739203_1280.jpg'
            />
       </Card>
       <Products/>
       </>
    );
};

export default Home;