import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, CssBaseline, ImageList, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { userData } from '../redux/reducers/authenticationReducer';
import { useState } from 'react';


const link = {
    textDecoration: "none",
    color: "#000000",
    fontSize: "16px",
    marginLeft: '50px',
    fontWeight: 'bold'
}

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.authenticationReducer.user)
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/home');
    }


    const cartItem = useAppSelector(state => state.cartReducer)
    return (
        <AppBar color='transparent' position='static' sx={{ height: '80px', alignContent: 'center', backgroundColor: "" }}  >
            <CssBaseline />
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ImageList sx={{ cursor: 'pointer' }}>
                    <img onClick={routeChange} style={{ height: '60px' }} src={require('../images/logoWhite.PNG')} alt="" />
                </ImageList>
                <Typography variant='h6'>
                    Hello {userData}
                </Typography>
                <Box mt={2} marginRight={2} sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link style={link} to="/" >Home</Link>
                    <Link style={link} to="/" >About</Link>
                    <Link style={link} to="/" >Categories</Link>
                    <Link style={link} to="/cart"><ShoppingCartIcon sx={{ position: 'relative', top: 3, fontSize: '24px' }} />
                        <span style={{
                            position: 'absolute', color: '#ffffff', top: 25, fontSize: '14px', textAlign: 'center',
                            borderRadius: '50%', paddingLeft: '2px', paddingRight: '2px', width: '20px', backgroundColor: 'black',
                            visibility: cartItem.cart.length !== 0 ? 'visible' : 'hidden'
                        }}>{cartItem.cart.length}</span></Link>
                    <Avatar sx={{ backgroundColor: 'orange' }}>{userInfo?.avatar}</Avatar>
                    <Box>
                        <MenuItem>
                            <Typography> Hello {userInfo?.name}  </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography> {userInfo?.email}  </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography> {userInfo?.role}  </Typography>
                        </MenuItem>
                    </Box>


                    {/* <Link style={link} to="/" ><Avatar sx={{ backgroundColor: 'orange' }}>A</Avatar></Link> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;