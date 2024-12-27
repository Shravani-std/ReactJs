import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth_slice'

const store = configureStore({
    reducer:{
        auth: authSlice,
        // post: postSlice
    }
});


export default store;
