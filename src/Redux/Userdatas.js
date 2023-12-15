// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



  
// // Define an asynchronous thunk for fetching user data
// export const fetchUserData = createAsyncThunk("userlist/fetchUserData", async () => {
//   try {
//     const response = await axios.get("http://localhost:3001/router/getuserdata");
//     return response.data; // Assuming the API returns an array of user data
//   } catch (error) {
//     throw error;
//   }
// });

// // Create a slice
// export const userdatas = createSlice({
//   name: "userlist",
//   initialState: {
//     user: initialUser,
//     status: "idle", // Possible statuses: "idle", "loading", "succeeded", "failed"
//     error: null,
//   },
//   reducers: {
//     // Use an object for reducers, not a function
//     fetchUserDataPending: (state) => {
//       state.status = "loading";
//     },
//     fetchUserDataFulfilled: (state, action) => {
//       state.status = "succeeded";
//       state.value = action.payload;
//     },
//     fetchUserDataRejected: (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserData.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchUserData.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.value = action.payload;
//       })
//       .addCase(fetchUserData.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { fetchUserDataPending, fetchUserDataFulfilled, fetchUserDataRejected } = userdatas.actions;

// export const selectUser = (state) => state.userlist.value;

// export default userdatas.reducer;



import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchdata=createAsyncThunk("fetchData",async()=>{
    const response=await axios.get("http://localhost:3001/router/getuserdata");
    return response.data;
})

const userdatas= createSlice({
    name:"datas",
    initialState:{
        isloading:false,
        data:[],
        error:false,

    },
    extraReducers:(builder)=>{
        // builder.addCase(fetchdata.pending,(state,action)=>{
        //     state.isloading=true;
        // })
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.isloading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.error=true;
        })
    }
})
 export const selectListedUser = (state) => state.datas.value;
export default  userdatas.reducer