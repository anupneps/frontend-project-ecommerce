
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Products from '../components/Products';

const Home = () => {
    return (
        <>
       <Card>
        <CardMedia 
              sx={{ height: 200, width:'100vw' }}
              image='https://cdn.pixabay.com/photo/2021/10/24/20/07/christmas-banner-6739203_1280.jpg'
              
            />
       </Card>
       <Products/>
       </>
    );
};

export default Home;