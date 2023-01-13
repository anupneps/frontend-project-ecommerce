import { Button, Divider, Grid, TextField, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import { useAppDispatch} from '../hooks/reduxHook'
import { createUser } from '../redux/reducers/authenticationReducer'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  // const userRegister = useAppSelector(state => state.authenticationReducer)

  const dispatch = useAppDispatch()
  const register = () => {
    dispatch(createUser({
      'name': `${name}`,
      'email': `${email}`,
      'password': `${password}`,
      'avatar': `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
    }))
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
        <>
        <Typography align='center' variant='h4' > SIGN UP  </Typography>
        <TextField variant='outlined' label='Name' type='text' placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)}></TextField>
        <TextField variant='outlined' label='E-mail' type='email' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} ></TextField>
        <TextField variant='outlined' label='Password' type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} ></TextField>
        <TextField variant='outlined'  type='file' required value={avatar} onChange={(e) => setAvatar(e.target.value)} ></TextField>
        <Button onClick={register} sx={{bgcolor:'#FFC108'}} variant='contained'>Signup</Button>
        {/* {userRegister.isSuccess?routeChange():<Typography>Error in SignUp! Try Again</Typography>} */}
        <Divider />
        <Typography variant='body2' > Already registered? <Link to ='/login'>Sign-In</Link></Typography>
        </>
      </Stack>
    </Grid>
  )
}

export default Register