import {createSlice} from '@reduxjs/toolkit';

const initialState = {user:null};
const userslice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload;          
        }
    }
})

export default userslice.reducer;
export const {setuser}=userslice.actions;

