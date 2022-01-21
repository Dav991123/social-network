import { ACCESS } from '../../../core/constants/util';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApiHandler from '../../../core/services/api/authApiHandler';
import LocalStorageHelper from '../../../core/helpers/localStorageHelper';

const initialState = {
    pending: false,
    isAuth: false,
    userData: {}
};

const authResponseProcess = (response, dispatch) => {
    if (response) {
        const { user, token } = response;
        dispatch(setIsAuth(true));
        LocalStorageHelper.setItem(ACCESS, token);
        dispatch(setUserData(user));
    }
};

export const signIn = createAsyncThunk(
    //action type string
    'auth/signIn',
    async (payload, { dispatch }) => {
        dispatch(setPending(true));
        const response = await authApiHandler.login(payload);
        authResponseProcess(response, dispatch);
        dispatch(setPending(false));
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (payload, { dispatch }) => {
        dispatch(setPending(true));
        const response = await authApiHandler.signUp(payload);
        authResponseProcess(response, dispatch);
        dispatch(setPending(false));
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, { dispatch }) => {
        LocalStorageHelper.deleteItem(ACCESS);
        dispatch(setIsAuth(false));
    }
);

export const authRefresh = createAsyncThunk(
    //action type string
    'auth/authRefresh',
    async (_, { dispatch }) => {
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
        setPending: (state, { payload }) => {
            state.pending = payload;
        }
    }
});

export const { setIsAuth, setUserData, setPending } = authSlice.actions;
export default authSlice.reducer;
