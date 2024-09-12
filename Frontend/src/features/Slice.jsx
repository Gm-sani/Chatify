import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: "Slice",
    initialState: true,
    reducers :{
        toggleTheme : (state) =>
        {
           return !state;
        },
    },

})

export const {toggleTheme} = Slice.actions;
export default Slice.reducer;