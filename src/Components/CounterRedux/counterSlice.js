import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counterApp",
    initialState: {
        value: 0,
    },
    reducers: {
        Increment: (state) => {
            state.value++;
        },
        Decrement: (state) => {
            state.value--;
        },
        Reset: (state) => {
            state.value=0;
        }

    },
});
export const { Increment, Decrement, Reset} = counterSlice.actions;
export default counterSlice.reducer;
