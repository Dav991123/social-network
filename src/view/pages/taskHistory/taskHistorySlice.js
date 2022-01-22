import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import taskHistoryApiHandler from '../../../core/services/api/taskHistoryApiHandler';


const initialState = {
	task: {
		count: 0,
		data: []
	}
};

export const getTaskHistory = createAsyncThunk(
	//action type string
	'task/getTaskHistory',
	async (_, { dispatch }) => {
		const response = await taskHistoryApiHandler.getTask();
		dispatch(setTaskHistory(response));
	}
);

export const taskHistorySlice = createSlice({
	name: 'taskHistory',
	initialState,
	reducers: {
		setTaskHistory: (state, { payload }) => {
			state.task = payload;
		}
	}
});

export const { setTaskHistory } = taskHistorySlice.actions;
export default taskHistorySlice.reducer;
