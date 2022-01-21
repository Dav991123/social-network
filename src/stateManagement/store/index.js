import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../view/pages/auth/authSlice';

export default configureStore({
    reducer: {
        auth: authReducer
    }
});
