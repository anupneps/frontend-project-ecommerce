import { Link, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'

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
                <OutlinedInput placeholder='Email Address' type='email' value={email} required onChange={(e) => setEmail(e.target.value)} ></OutlinedInput>
                <OutlinedInput placeholder='Password' type='password' value={password} required onChange={(e) => setPassword(e.target.value)} ></OutlinedInput>
                <Button onClick={(e) => loginHandle(e)} color='success'>Login</Button>
                <Divider />
                <Typography variant='body2' >Not registered? <Link href='/signup' variant='body2'>Sign-Up</Link></Typography>
            </Stack>
        </Grid>
    )
}

export default Login

