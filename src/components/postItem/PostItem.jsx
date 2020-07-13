import React from 'react';
import './PostItem.scss';
import BackButtonPostList from '../buttons/BackButton/BackButtonPostList';

const PostItem = (props) => {
	return (
		<div className="post_items">
			<BackButtonPostList />
			<div>{props.text}</div>
		</div>
	);
};

export default PostItem;
