import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios, { AxiosResponse } from 'axios'
import {Users} from '../../types/users'

export interface Authentication{
    message:string
    user:Users[]
    token:string
    loading:boolean
    error:any
}

export interface AuthState {
    authentication: Authentication[]
}
const initialState:AuthState[] = []

export const createUser = createAsyncThunk(
    "createUser", 
    async(user:Users)=>{
        try {
            const response:AxiosResponse<Users, Users> = await axios.post("https://api.escuelajs.co/api/v1/users/", user)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const autheticateUser= createAsyncThunk(
    "authenticateUser",
    async(user:Users)=>{
        try {
            const response:AxiosResponse<Users, Users> = await axios.post("https://api.escuelajs.co/api/v1/auth/login", user )
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
)


const authenticationSlice = createSlice({
    name: 'authenciationSlice',
    initialState:initialState,
    reducers:{
    //    addToken: (state:Authentication, action:PayloadAction<Authentication>)=>{
    //         return state.token = action.payload.
    //    },
    //    addUsers: (state, action)=>{
    //        state.user.push(action.payload.user)
    //    }
    // },
    // extraReducers:(build)=> {
    //     build.addCase(createUser.pending, (state,action)=>{
    //         state.loading = true
            
    //     })
    //     build.addCase(createUser.fulfilled, (state, action)=>{
    //         state.loading=false
    //         console.log(action.payload)
                   

    //         // if(action.payload && "message" in action.payload){
    //         //     return state
    //         //    }else if (!action.payload){
    //         //     return state
    //         //    }
    //         //    return action.payload
    //     })
    },
        
})



const authenticationReducer = authenticationSlice.reducer
// export const {addToken, addUsers} = authenticationSlice.actions
export default authenticationReducer
