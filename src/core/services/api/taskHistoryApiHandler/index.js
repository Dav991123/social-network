import { httpClient } from '../../httpClient';

const END_POINTS = {
	prefix: 'task',
};

class TaskHistoryApiHandler {
	async getTask() {
		return await httpClient.get(`${END_POINTS.prefix}`);
	}
}

const taskHistoryApiHandler = new TaskHistoryApiHandler();
export default taskHistoryApiHandler;