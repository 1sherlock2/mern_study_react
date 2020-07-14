import React, { useState } from 'react';
import PostsFormReduxForm from './PostsForm';
import { postAddThunk } from '../../redux/reducer/PostsReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AuthRedirectHOK } from '../../redux/HOC/AuthRedirectHOK';

const PostsFromContainer = props => {
	let [editMode, setEditMode] = useState(false);

	let onSubmit = formData => {
		let userId = props.userId;
		props.postAddThunk(userId, formData).then(() => {
			setEditMode(true);
		});
	};

	return !editMode ? <PostsFormReduxForm onSubmit={onSubmit} /> : <Redirect to='/posts' />;
};

let mapStateToProps = state => ({
	...state,
	userId: state.authData.userId
});

export default compose(connect(mapStateToProps, { postAddThunk }), withRouter, AuthRedirectHOK)(PostsFromContainer);
