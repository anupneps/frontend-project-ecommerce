import { Link, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import {useState } from 'react'
import { useAppDispatch} from '../hooks/reduxHook'
import { autheticateUser } from '../redux/reducers/AuthenticationReducer'
import { Divider } from '@mui/material';



const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()
    const register = ()=>{
        
        dispatch(autheticateUser({
            "email": `${email}`,
            "password":`${password}`
        }))
    }
    
    return (

        <Grid item md={4} sx={{
            height: '100vh',
            position: 'fixed',
            right: 0,
            top: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            
           
          }}> 
          <Stack spacing={2} padding='20px' sx={{ width: '500px', border: '2px solid grey' }}>
          <Typography align='center' variant='h4' >LOG IN  </Typography>
          <OutlinedInput placeholder='Email Address' required ></OutlinedInput>
          <OutlinedInput placeholder='Password' required ></OutlinedInput>
          <Button color='success'>Login</Button>
          <Divider/>
          <Typography variant='body2' >Not registered? <Link href='/signup' variant='body2'>Sign-Up</Link></Typography>
          </Stack>
    
        </Grid>

    )
}

export default Register