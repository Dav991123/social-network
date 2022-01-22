import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../view/pages/auth/authSlice';
import postsReducer from '../../view/pages/posts/postsSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
    }
});
