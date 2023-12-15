import { createSlice } from "@reduxjs/toolkit";

export const GroupSlice = createSlice({
    name: "group",
    initialState: {
      value: {},
    },
    reducers: {
        addGroup: (state, action) => {
            state.value = action.payload;
          },
    },
  });
  
  export const { addGroup } = GroupSlice.actions;
  
  export const selectGroup = (state) => state.group.value;
  
  export default GroupSlice.reducer;