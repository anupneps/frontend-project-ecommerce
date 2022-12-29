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
    const register = ()=>{
        dispatch(createUser({
            'name':`${name}`,
            'email': `${email}`,
            'password':`${password}`,
            'avatar':`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
        }))
    }
    
    dispatch(addUsers)
    

    // const register = useAppSelector(state => state.userReducer)
    // const dispatch = useAppDispatch()
    // console.log("User:", register)

    // const addUser = () => {
    //     dispatch(createUser({
    //         'name': 'JohnDoe',
    //         'email': 'email@email.com',
    //         'password': 'passwordChange',
    //         'avatar':'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'
    //     }))
    // }

    return (
        <div>
            {/* <h2>Register User</h2>
            
             {<button onClick={addUser}>Add User</button>}
            {register.map(user =>
            (<div><p key={user.id}>{user.name}</p>

            </div>))} */}

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