import { AppBar, CssBaseline, Toolbar, ImageList, Typography, Box, Stack, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {
    const link = {
        textDecoration: "none",
        color: "#000000",
        fontSize: "16px",
        marginLeft: '20px',
        fontWeight: 'bold'
    }
    return (
        <AppBar color='transparent'
            sx={{
                height: '250px', 
                position: 'relative',
                clear:'both',
                marginTop:'auto',
                width: '100%',
               
            }}  >
            <CssBaseline />
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-between' }}>
                <Stack >
                    <ImageList sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                        <img style={{ height: '80px' }} src={require('../images/logoWhite.PNG')} alt="" />
                    </ImageList>
                    <Box display={'flex'} justifyContent='center' sx={{ textAlign: 'center' }}><Typography variant='body2' fontWeight={'bold'}>www.orderlyonclick.com</Typography></Box>

                    <Box marginTop={'10px'} mt={2} marginRight={2} display={'flex'} justifyContent='space-between' >
                        <Link style={link} href="/" >Home</Link>
                        <Link style={link} href="/" >About</Link>
                        <Link style={link} href="/" >Categories</Link>
                        <Link style={link} href="/">Cart</Link>
                    </Box>
                    <Box marginTop={'20px'} display={'flex'} justifyContent='space-between'>
                        <Link style={link} href="https://www.facebook.com/" ><FacebookIcon /></Link>
                        <Link style={link} href=''><TwitterIcon /></Link>
                        <Link style={link} href=''><InstagramIcon /></Link>
                        <Link style={link} href=''><LinkedInIcon /></Link>
                    </Box>
                    <Box display={'flex'} justifyContent='center' sx={{ textAlign: 'center' }}><Typography variant='body2' fontWeight={'bold'}>2023</Typography></Box>

                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default Footer