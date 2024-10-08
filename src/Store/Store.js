import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../Store/AuthSlice'

const store= configureStore({
    reducer :{
        auth: AuthReducer,
    }
})

export default store