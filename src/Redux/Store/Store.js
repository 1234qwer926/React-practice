import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/States/Counterslice";
import userReducer from "../Slice/States/Userslice";
import { postApi } from "../Slice/Apis/PostApi";

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        user:userReducer,
        [postApi.reducerPath]: postApi.reducer,



    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})