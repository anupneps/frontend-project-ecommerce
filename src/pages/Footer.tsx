import { AppBar, CssBaseline, Toolbar, ImageList, Typography, Box, Stack, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const link = {
        textDecoration: "none",

        fontSize: "16px",
        marginLeft: '20px',
        fontWeight: 'bold',
        color: '#1a5db6'
    }
    return (
        <AppBar
            sx={{
                height: '120px',
                position: 'fixed',
                clear: 'both',
                bottom: 0,
                marginTop: 'auto',
                width: '100%',
                backgroundColor: '#ffc108',
                color: '#1a5db6'

            }}  >
            <CssBaseline />
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                {/* <Stack > */}


                <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    <Box mt={2} marginRight={2} display={'flex'} justifyContent='space-between' >
                        <Link style={link} href="/" >Home</Link>
                        <Link style={link} href="/about" >About</Link>
                        <Link style={link} href="/categories" >Categories</Link>
                        <Link style={link} href="/cart">Cart</Link>
                    </Box>
                    <Box>
                        <ImageList sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                            <img style={{ height: '40px' }} src={require('../images/logoWhite.PNG')} alt="" />
                        </ImageList>
                        <Box display={'flex'} flexDirection='column' justifyContent='center' sx={{ textAlign: 'center' }}>
                            <Typography variant='body2' fontWeight={'bold'}>www.orderlyonclick.com</Typography>
                            <Typography variant='body2' fontWeight={'bold'}>2023</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={'10px'} display={'flex'} justifyContent='space-between'>
                        <Link style={link} href="https://www.facebook.com/" ><FacebookIcon /></Link>
                        <Link style={link} href=''><TwitterIcon /></Link>
                        <Link style={link} href=''><InstagramIcon /></Link>
                        <Link style={link} href=''><LinkedInIcon /></Link>
                    </Box>
                </Box>


                {/* </Stack> */}

            </Toolbar>
        </AppBar>
    )
}

export default Footer