import {Checkbox, FormControlLabel, Stack, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'


import { autheticateUser } from '../redux/reducers/authenticationReducer'

const Login = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userAuth = useAppSelector(state => state.authenticationReducer)
    const dispatch = useAppDispatch()

    const loginHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(autheticateUser({
            "email": `${email}`,
            "password": `${password}`
        }))
    }

    useEffect(() => {
        if (userAuth.isAuthenticated) {
            routeChange()
        }
    },)

    return (
        <Grid item md={4} sx={{
            height: '100%',
            marginTop: '10%',
            marginBottom: '10%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Stack spacing={2} padding='20px' sx={{ width: '500px', border: '2px solid grey' }}>
                <Typography align='center' variant='h4' >LOG IN  </Typography>
                {/* <Typography>{userAuth.isError ? '' : 'Login Failed'}</Typography>  */}
                {/* <Typography>{loginStatus}</Typography> */}
                <TextField variant='outlined' label='E-mail'  placeholder='Email Address' type='email' value={email} required onChange={(e) => setEmail(e.target.value)} ></TextField>
                <TextField variant='outlined' label='Password' placeholder='Password' type='password' value={password} required onChange={(e) => setPassword(e.target.value)} ></TextField>
                <FormControlLabel control={<Checkbox defaultChecked color='success' />} label="Remember Me" />
                <Button onClick={(e) => loginHandle(e)} sx={{bgcolor:'#FFC108'}} variant='contained'>Login</Button>
                <Typography variant='body2' >Forgot Password?<Link to='/signup'> Click here</Link></Typography>
                <Divider />
                <Typography variant='body2' >Not registered? <Link to='/signup'>Sign-Up</Link></Typography>
            </Stack>
        </Grid>
    )
}

export default Login

