import { Link, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import {useState } from 'react'
import { useAppDispatch, useAppSelector} from '../hooks/reduxHook'
import { autheticateUser } from '../redux/reducers/authenticationReducer'
import { Divider } from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom'



const Register = () => {
    let navigate = useNavigate();
    const routeChange =()=>{
        navigate('/home')
    }
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userAuth = useAppSelector(state=> state.authenticationReducer)
    const dispatch = useAppDispatch()
    const register = ()=>{
        
        dispatch(autheticateUser({
            "email": `${email}`,
            "password":`${password}`
        }))
        routeChange()
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
          {userAuth.isSuccess ? <Typography>Login success!!</Typography>:<Typography>Login Failed!!</Typography>}
          <OutlinedInput placeholder='Email Address' value={email} required onChange={(e)=> setEmail(e.target.value)} ></OutlinedInput>
          <OutlinedInput placeholder='Password' value={password} required onChange={(e)=> setPassword(e.target.value)} ></OutlinedInput>
          <Button onClick={register} color='success'>Login</Button>
          <Divider/>
          <Typography variant='body2' >Not registered? <Link href='/signup' variant='body2'>Sign-Up</Link></Typography>
          </Stack>
    
        </Grid>

    )
}

export default Register

