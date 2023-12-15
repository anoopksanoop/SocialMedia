import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import UserReducer from "../UserSlice";
import ListReducer from "../Userdatas"
import UserdatasReducer from "../Userdatas";
import  GroupReducer from "../Groupslice"

const store =configureStore({
    reducer:{
        user:UserReducer,
        datas:UserdatasReducer,
        group:GroupReducer
        // userlist:ListReducer,
    }
})

export default store;