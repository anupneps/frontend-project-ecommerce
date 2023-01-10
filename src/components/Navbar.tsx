import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, CssBaseline, ImageList, Toolbar, Typography } from '@mui/material';
import { Avatar } from '@mui/material';

const link = {
    textDecoration: "none",
    color:'#1a5db6',
    fontSize: "16px",
    marginLeft: '50px',
    fontWeight: 'bold'
}

const Navbar: React.FC = () => {
    const userInfo = useAppSelector(state => state.authenticationReducer)
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/home');
    }

    const cartItem = useAppSelector(state => state.cartReducer)
    return (
        <AppBar position='static' sx={{ height: '80px', alignContent: 'center', backgroundColor: "#ffffff" }}  >
            <CssBaseline />
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ImageList sx={{ cursor: 'pointer' }}>
                    <img onClick={routeChange} style={{ height: '60px' }} src={require('../images/logoWhite.PNG')} alt="" />
                </ImageList>
                <Typography variant='h6' sx={{color:'#1a5db6'}}>
                {userInfo.isAuthenticated ? 'Hello '+ userInfo.user?.name :' '}
                </Typography>
                <Box mt={2} marginRight={2} sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link style={link} to="/" >Home</Link>
                    <Link style={link} to="/about" >About</Link>
                    <Link style={link} to="/categories" >Categories</Link>
                    <Link style={link} to="/cart"><ShoppingCartIcon sx={{ position: 'relative', top: 3, fontSize: '24px' }} />
                        <span style={{
                            position: 'absolute', color: '#ffffff', top: 25, fontSize: '14px', textAlign: 'center',
                            borderRadius: '50%', paddingLeft: '2px', paddingRight: '2px', width: '20px', backgroundColor: 'black',
                            visibility: cartItem.cart.length !== 0 ? 'visible' : 'hidden'
                        }}>{cartItem.cart.length}</span></Link>


                    {userInfo.isAuthenticated ? <Link style={link} to="/profile" ><Avatar alt="User Profile" src={userInfo?.user?.avatar} /></Link> :
                        <Link style={link} to="/login" ><Avatar alt="User Profile" src={userInfo?.user?.avatar} />
                            <Typography variant='body2' fontWeight={'bold'} >Login</Typography></Link>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;