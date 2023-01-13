import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import axiosInstance from '../../shared/axiosInstance'
import { AuthState } from '../../types/authorization'
import { Users } from '../../types/users'

const initialState: AuthState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    isAuthenticated: false,
    user: {
        id: null,
        email: '',
        password: '',
        name: '',
        role: '',
        avatar: '',
        access_token: ''
    }
}



export const createUser = createAsyncThunk(
    "createUser",
    async (user: Users) => {
        try {
            const response: AxiosResponse<Users, Error> = await axiosInstance.post("users", user)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

const userTokenFromLocalStorage = localStorage.getItem("token")
const userToken = userTokenFromLocalStorage? JSON.parse(userTokenFromLocalStorage):''
console.log(userToken.access_token)

export const autheticateUser = createAsyncThunk(
    "authenticateUser",
    async (user: Users) => {
        try {
            const response: AxiosResponse<Users, Users> = await axiosInstance.post("auth/login", user)
            console.log("Login Successful")
           
            localStorage.setItem("token", JSON.stringify(response.data))
            const sessionInfo = await axiosInstance.get('auth/profile',
                {
                    headers:
                        // { Authorization: `Bearer ${response.data.access_token}` }
                        { Authorization: `Bearer ${userToken.access_token}` }
                })
            return (response.data.access_token, sessionInfo.data)
        } catch (error) {
            console.log(error)
        }
    }
)

const authenticationSlice = createSlice({
    name: 'authenciationSlice',
    initialState: initialState,
    reducers: {
        logout(state, action) {
            state.user = null
            state.isAuthenticated = false
        }

    }, extraReducers: (build) => {
        build.addCase(autheticateUser.pending, (state, action) => {
            state.isLoading = true
        })
        build.addCase(autheticateUser.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.user = action.payload
            if (state.user) {
                state.isAuthenticated = true
            } else {
                state.isAuthenticated = false
                state.isError = true
            }
        })
        build.addCase(autheticateUser.rejected, (state, action) => {
            state.isError = true
        })
        // SignUp extrareducers
        build.addCase(createUser.pending, (state, action) => {
            state.isLoading = true
        })
        build.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
        })
        build.addCase(createUser.rejected, (state, action) => {
            state.isError = true
        })
    },

})

const authenticationReducer = authenticationSlice.reducer
export const { logout } = authenticationSlice.actions
export default authenticationReducer
