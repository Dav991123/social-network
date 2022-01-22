import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../view/pages/auth/authSlice';
import taskHistoryReducer from '../../view/pages/taskHistory/taskHistorySlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        taskHistory: taskHistoryReducer,
    }
});
