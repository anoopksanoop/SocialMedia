import { createSlice } from "@reduxjs/toolkit";

const userString = sessionStorage.getItem('user');
let user = {};
if(userString){
  const userParsed = JSON.parse(userString);
  if(userParsed && userParsed.id){
    user = userParsed;
  }
}
export const userSlice = createSlice({
    name: "user",
    initialState: {
      value: user,
    },
    reducers: {
      setUser: (state, action) => {
        const user = {
          ...state.value,
          ...(action.payload),
          isLoggedIn: true 
        }
        state.value = user;
        sessionStorage.setItem('user', JSON.stringify(user))
      },
    
      logout: (state) => {
        state.value = null;
      },
    },
  });
  
  export const { setUser, logout } = userSlice.actions;
  
  export const selectUser = (state) => state.user.value;
  
  export default userSlice.reducer;