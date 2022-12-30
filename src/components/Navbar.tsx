import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, CssBaseline, ImageList, Toolbar, Typography } from '@mui/material';
import { Avatar } from '@mui/material';


const link= {
      textDecoration: "none",
      color: "	#000000",
      fontSize: "16px",
      marginLeft: '50px',
      fontWeight:'bold'
    }


const Navbar = () => {
    const cartItem = useAppSelector((state: { cartReducer: any; }) => state.cartReducer)
    return (
        <AppBar color='transparent' position='static' sx={{height:'80px', alignContent:'center', backgroundColor:""}}  >
            <CssBaseline />
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                <ImageList>
                    <img style={{height:'60px'}} src={require('../images/logoWhite.PNG')} alt=""  />
                    
                </ImageList>
                {/* <Typography variant='h6'>
                    ORDERLY
                </Typography> */}
                <Box mt={2} marginRight={2} sx={{color:'red', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <Link style={link} to="/" >Home</Link>
                    <Link style={link} to="/" >About</Link>
                    <Link style={link} to="/" >Categories</Link>
                    <Link style={link} to="/cart"><ShoppingCartIcon sx={{position:'relative', top:3, fontSize:'24px'}}/>
                    <span style={{position:'absolute', color:'#ffffff', top:25, fontSize:'14px', textAlign:'center', borderRadius:'50%', paddingLeft:'2px', paddingRight:'2px', width:'20px', backgroundColor:'black',visibility:cartItem.length !== 0 ? 'visible':'hidden'}}>{cartItem.length}</span></Link>
                    <Link style={link} to="/" ><Avatar sx={{backgroundColor:'orange'}}>A</Avatar></Link>
                </Box>
            </Toolbar>
        </AppBar>


    )
};

export default Navbar;