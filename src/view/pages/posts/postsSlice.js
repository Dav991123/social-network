import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsApiHandler from '../../../core/services/api/postsApiHandler';

const initialState = {
	pending: false,
	postsLists: {
		count: 0,
		data: []
	}
};

export const getPosts = createAsyncThunk(
	//action type string
	'posts/getPosts',
	async (_, { dispatch }) => {
		dispatch(setPending(true));
		const response = await postsApiHandler.getPosts();
		dispatch(setPosts(response));
		dispatch(setPending(false));
	}
);

export const addPost = createAsyncThunk(
	//action type string
	'post/addPost',
	async (payload, { dispatch }) => {
		const response = await postsApiHandler.addPost(payload);
		dispatch(getPosts());
	}
);

export const deletePost = createAsyncThunk(
	'post/deletePost',
	async (payload, { dispatch }) => {
		const response = await postsApiHandler.deletePost(payload);
		if(response.success) {
			dispatch(getPosts());
		}
	}
);

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, { payload }) => {
			state.postsLists = payload;
		},
		setPending: (state, { payload }) => {
			state.pending = payload;
		}
	}
});

export const { setPosts, setPending } = postsSlice.actions;
export default postsSlice.reducer;
