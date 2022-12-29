import {useState } from 'react'
import { useAppDispatch} from '../hooks/reduxHook'
import { autheticateUser } from '../redux/reducers/AuthenticationReducer'


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
        <div>
             <h2>Log In</h2>
            <form className='register' >
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail((e.target.value))} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword((e.target.value))} />
                <input type="button" value="LogIn" onClick={register} />

            </form>


        </div>
    )
}

export default Register