import { Button, Divider, Grid, Link, OutlinedInput, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch } from '../hooks/reduxHook'
import { addUsers } from '../redux/reducers/AuthenticationReducer'
import { createUser } from '../redux/reducers/AuthenticationReducer'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[avatar, setAvatar]=useState('')

    const dispatch = useAppDispatch()
    const register = () => {
        dispatch(createUser({
            'name': `${name}`,
            'email': `${email}`,
            'password': `${password}`,
            'avatar': `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
        }))
    }
    dispatch(addUsers)

    return (
        // <div>
        //     <form className='register' >
        //         <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        //         <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        //         <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        //         {/* <input type="file" id="avatar" name="avatar" value={avatar} onChange={(e)=>setAvatar(e.target.value)} accept="image/*"></input> */}
        //         <input type="button" value="Register" onClick={register} />
        //     </form>
        // </div>
        <>
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
          <Typography align='center' variant='h4' > SIGN UP  </Typography>
          <OutlinedInput type='text' placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)}></OutlinedInput>
          <OutlinedInput type='email' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} ></OutlinedInput>
          <OutlinedInput type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} ></OutlinedInput>
          <OutlinedInput type='file' required value={avatar}  onChange={(e) => setAvatar(e.target.value)} ></OutlinedInput>
          <Button onClick={register} color='success'>Signup</Button>
          <Divider/>
          <Typography variant='body2' > Already registered? <Link href='/login' variant='body2'>Sign-In</Link></Typography>
          
          
          </Stack>
          
          

        </Grid>
        </>
    )
}

export default Register