import { Avatar, Paper, Table, TableContainer } from '@mui/material'
import Button from '@mui/material/Button'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { logout } from '../redux/reducers/authenticationReducer'
import { emptyCart } from '../redux/reducers/cartReducer'

const Profile = () => {
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.authenticationReducer)
    const cartItem = useAppSelector(state => state.cartReducer.cart)
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/')
    }

    const handleLogout = () => {
        dispatch(logout(userInfo.user))
        dispatch(emptyCart(cartItem))
        routeChange()
    }

    return (
        <TableContainer component={Paper}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '50px',
                position: 'absolute',
                top: '10%',
                left: '38%',
                width: 'fit-content'
            }} >
            <Avatar alt="random" src={userInfo?.user?.avatar}
                sx={{ width: '200px', height: '200px', border: '1px solid black', margin: '10px' }} />
            <Table >
                <TableHead  >
                    <TableRow  >
                        <TableCell variant='head' sx={{ fontSize: '20px' }}>Profile Summary</TableCell>
                        <TableCell style={{ border: 'none', position: 'absolute', right: 0 }} variant='head'>
                            <Button variant='contained' color='primary' >Edit</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            {'Name'}
                        </TableCell>
                        <TableCell>
                            {userInfo?.user?.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            {'Email'}
                        </TableCell>
                        <TableCell>
                            {userInfo?.user?.email}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            {'Password'}
                        </TableCell>
                        <TableCell >
                            {userInfo?.user?.password}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            {'Role'}
                        </TableCell>
                        <TableCell >
                            {userInfo?.user?.role}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button onClick={handleLogout} variant='contained' color='primary' sx={{ margin: '20px' }} >LogOut</Button>
        </TableContainer>

    )
}

export default Profile


