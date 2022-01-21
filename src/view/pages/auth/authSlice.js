import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApiHandler from '../../../core/services/api/authApiHandler';
import LocalStorageHelper from '../../../core/helpers/localStorageHelper';
import { ACCESS } from '../../../core/constants/util';

const initialState = {
    isAuth: false,
    userData: {}
};

export const signIn = createAsyncThunk(
    //action type string
    'auth/signIn',
    async (payload, { dispatch }) => {
        const response = await authApiHandler.login(payload);
        if (response) {
            const { user, token } = response;
            dispatch(setIsAuth(true));
            LocalStorageHelper.setItem(ACCESS, token);
            dispatch(setUserData(response.user));
        }
    }
);

export const authRefresh = createAsyncThunk(
    //action type string
    'auth/authRefresh',
    async (_, {dispatch}) => {
        if (LocalStorageHelper.getItem(ACCESS)) {
            dispatch(setIsAuth(true));
            const response = await authApiHandler.getUserMe();
            dispatch(setUserData(response));
        }
    }
);

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, { payload }) => {
            state.isAuth = payload;
        },
        setUserData: (state, { payload }) => {
            state.userData = payload;
        },
    }
});

export const { setIsAuth, setUserData } = authSlice.actions;
export default authSlice.reducer;
