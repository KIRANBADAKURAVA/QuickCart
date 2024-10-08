import { createSlice } from "@reduxjs/toolkit";



//Initial State
const initialState= {
    status: false,
    data: null
}

export const AuthSlice= createSlice({
    
    name: 'auth',
    initialState,
    reducers: {
        login : (state,action)=>{
            state.status= true
            state.data= action.payload
        },

        logout : (state,action)=>{
            state.status= false
            state.action= null

        }
    }
})

export const{login,logout}= AuthSlice.actions
export default AuthSlice.reducer