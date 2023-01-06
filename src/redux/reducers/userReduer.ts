import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import  { AxiosResponse } from "axios"

import axiosInstance from "../../shared/axiosInstance"
import { Users } from "../../types/users"

const initialState: Users[] = []

export const createUser = createAsyncThunk(
    "createUser",
    async (user: Users) => {
        try {
            const response: AxiosResponse<Users, Users> = await axiosInstance.post("users", user)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        remove(state, action: PayloadAction<number>) {
            state = state.filter(user => user.id !== action.payload)
        }
    },
    extraReducers: (build) => {
        build.addCase(createUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.push(action.payload)
            } else {
                return state
            }
        })
    }
})

const userReducer = userSlice.reducer
export const { remove } = userSlice.actions
export default userReducer