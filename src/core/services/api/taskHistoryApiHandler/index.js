import { httpClient } from '../../httpClient';

const END_POINTS = {
	prefix: 'task'
};

class TaskHistoryApiHandler {
	async getTask() {
		return await httpClient.get(`${END_POINTS.prefix}`);
	}

	async addTask(data) {
		console.log(data, 'data');
		return await httpClient.post(`${END_POINTS.prefix}`, data);
	}
}

const taskHistoryApiHandler = new TaskHistoryApiHandler();
export default taskHistoryApiHandler;