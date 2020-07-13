import {postsAPI} from '../api/API';

const GET_POSTS = 'GET_POSTS';
const POST_BY_ID = 'POST_BY_ID';
const POST_ADD = 'POST_ADD';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: null,
	postById: null
};
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {...state, posts: action.posts.reverse()};
		case POST_BY_ID:
			return {...state, postById: action.postById};
		case POST_ADD:
			return {...state, posts: [...state.posts, action.post]};
		case DELETE_POST:
			return {...state, posts: [...state.posts.filter((el) => el._id !== action.id)]};
		default:
			return {...state};
	}
};
const getPostsDispatch = (posts) => ({type: GET_POSTS, posts});
const postsByIdDispatch = (postById) => ({type: POST_BY_ID, postById});
const deletePostByIdDispatch = (id) => ({type: DELETE_POST, id});

export const getPostsThunk = (userId) => async (dispatch) => {
	try {
		let response = await postsAPI.getPostsAPI(userId);
		if (response.status === 200) {
			dispatch(getPostsDispatch(response.data));
		}
	} catch (e) {
		console.log('Error try again later');
	}
};
export const postAddThunk = (userId, formData) => () => {
	return postsAPI.postAddAPI(userId, formData);
};
export const postsByIdThunk = (userId, id) => async (dispatch) => {
	let response = await postsAPI.postByIdAPI(userId, id);
	if (response.status === 200) {
		dispatch(postsByIdDispatch(response.data));
	}
};
export const editPostThunk = (userId, id, formData) => () => {
	return postsAPI.editPostAPI(userId, id, formData);
};
export const deletePostThunk = (id) => (dispatch) => {
	return postsAPI.deletePostAPI(id).then((response) => {
		if (response.status === 'deleted') {
			dispatch(deletePostByIdDispatch(id));
		}
	});
};

// export const inputImageThunk = (fileImage) = dispatch => {
//   return postsAPI.
// }
