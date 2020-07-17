import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'http://sherlockstudy.ru/api/',
	withCredentials: true
});

export const postsAPI = {
	getPostsAPI(userId) {
		return instance.get(`${userId}/posts`);
	},
	postAddAPI(userId, formData) {
		return instance.post(`${userId}/set_post`, formData);
	},
	postByIdAPI(id) {
		return instance.get(`post/${id}`);
	},
	editPostAPI(id, formData) {
		return instance.put(`update_post/${id}`, formData);
	},
	deletePostAPI(id) {
		return instance.delete(`delete_post/${id}`);
	}
};

export const loginAPI = {
	registerFromAPI(formData) {
		return instance.post('register', formData);
	},
	authFormAPI(formData) {
		return instance.post('auth', formData);
	}
};
