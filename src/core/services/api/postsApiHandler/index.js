import { httpClient } from '../../httpClient';

const END_POINTS = {
	prefix: 'task'
};

class PostsApiHandler {
	async getPosts() {
		return await httpClient.get(`${END_POINTS.prefix}`);
	}

	async addPost(data) {
		return await httpClient.post(`${END_POINTS.prefix}`, data);
	}

	async deletePost(id) {
		return await httpClient.delete(`${END_POINTS.prefix}/${id}`);
	}
}

const postsApiHandler = new PostsApiHandler();
export default postsApiHandler;