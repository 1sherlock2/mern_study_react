import React from 'react';
import './PostItem.scss';
import BackButtonPostList from '../buttons/BackButton/BackButtonPostList';

const PostItem = props => {
	return (
		<div className='post_items'>
			<BackButtonPostList />
			{props.postById && <div className='post-item'>{props.postById.text}</div>}
		</div>
	);
};

export default PostItem;
