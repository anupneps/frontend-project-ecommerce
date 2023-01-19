import { Button, Divider, Grid, TextField, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { createUser } from '../redux/reducers/authenticationReducer'
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

import { Users } from '../types/users'

const schema = yup.object({
  name: yup.string().required("Name is required !").max(20),
  email: yup.string().email().required("Email is required !"),
  password: yup.string().min(8).max(32).required("Password is required !"),
}).required();

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Users>({
    resolver: yupResolver(schema)
  })
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/login')
  }
  const [signUpSuccess, setSignUpSuccss] = useState(false)
  const [signUpError, setSignUpError] = useState(true)
  const userRegister = useAppSelector(state => state.authenticationReducer)

  const dispatch = useAppDispatch()
  const signUp: SubmitHandler<Users> = (data) => {
    dispatch(createUser({
      'name': `${data.name}`,
      'email': `${data.email}`,
      'password': `${data.password}`,
      'avatar': `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
    }))
    if (userRegister.isSuccess) {
      setSignUpSuccss(true)
      setSignUpError(false)
      alert('SignUp Successful!')
      routeChange()
    }
  }

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
        <Typography align='center' variant='h4' >SIGN UP  </Typography>
        <Typography>{signUpSuccess ? 'SignUp Successful!' : ''}</Typography>
        <Typography>{signUpError ? '' : 'SignUp Failed! Try Again!'}</Typography>
        <TextField {...register('name')} variant='outlined' label='Name' placeholder='Name' type='text' required></TextField>
        <Typography>{errors.name?.message}</Typography>
        <TextField {...register('email')} variant='outlined' label='E-mail' placeholder='Email Address' type='email' required></TextField>
        <Typography>{errors.email?.message}</Typography>
        <TextField {...register('password')} variant='outlined' label='Password' placeholder='Password' type='password' required></TextField>
        <Typography>{errors.password?.message}</Typography>
        {/* <TextField variant='outlined' type='file' required value={avatar} onChange={(e) => setAvatar(e.target.value)} ></TextField> */}
        <Button onClick={handleSubmit(signUp)} sx={{ bgcolor: '#FFC108' }} variant='contained'>SignUp</Button>
        <Divider />
        <Typography variant='body2' > Already registered? <Link to='/login'>Sign-In</Link></Typography>
      </Stack>
    </Grid>
  )
}

export default Register