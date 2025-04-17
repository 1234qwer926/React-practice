import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0 };
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setcountInc:(state)=>{
            state.count++;
        },
        setcountDec:(state)=>{
            state.count--;
        },
        setReset:(state)=>{
            state.count=0;
        },
        
    },
});
export const { setcountInc,setcountDec,setReset } = counterSlice.actions;
export default counterSlice.reducer;