
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { createUser } from '../redux/reducers/userReduer'

const Register = () => {
    const register = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    console.log("User:", register)

    const addUser = () => {
        dispatch(createUser({
            'name': 'JohnDoe',
            'email': 'email@email.com',
            'password': 'passwordChange',
            'avatar':'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'
        }))
    }

    return (
        <div>  {<button onClick={addUser}>Add User</button>}
            {register.map(user =>
            (<div><p key={user.id}>{user.name}</p>

            </div>))}
        </div>
    )
}

export default Register