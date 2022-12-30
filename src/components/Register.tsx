import { useState } from 'react'
import { useAppDispatch } from '../hooks/reduxHook'
import { addUsers } from '../redux/reducers/AuthenticationReducer'
import { createUser } from '../redux/reducers/AuthenticationReducer'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const[avatar, setAvatar]=useState('')

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
        <div>
            <form className='register' >
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* <input type="file" id="avatar" name="avatar" value={avatar} onChange={(e)=>setAvatar(e.target.value)} accept="image/*"></input> */}
                <input type="button" value="Register" onClick={register} />
            </form>
        </div>
    )
}

export default Register