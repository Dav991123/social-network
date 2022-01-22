import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsApiHandler from '../../../core/services/api/postsApiHandler';

const initialState = {
	postsLists: {
		count: 0,
		data: []
	}
};

export const getPosts = createAsyncThunk(
	//action type string
	'posts/getPosts',
	async (_, { dispatch }) => {
		const response = await postsApiHandler.getTask();
		dispatch(setTaskHistory(response));
	}
);

export const addPost = createAsyncThunk(
	//action type string
	'post/addPost',
	async (payload, { dispatch }) => {
		const response = await postsApiHandler.addTask(payload);
		dispatch(getPosts());
	}
);
export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setTaskHistory: (state, { payload }) => {
			state.postsLists = payload;
		}
	}
});

export const { setTaskHistory } = postsSlice.actions;
export default postsSlice.reducer;
