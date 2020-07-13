import React from 'react';
import './PostsList.scss';
import {NavLink, withRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const PostsList = (props) => {
	return (
		<div>
			<div className="posts_content">
				<div className="post-items">
					{props.posts &&
						props.posts.map((el) => (
							<div className="post-item" key={el._id}>
								<NavLink to={`/posts/${el._id}`}>
									<h3>{el.title}</h3>
								</NavLink>
								<p>
									<i> {el.createdAt} </i>
								</p>
								<div className="button_list">
									<Button variant="primary" size="sm">
										<NavLink className="nav_edit" to={`posts/edit/${el._id}`}>
											edit
										</NavLink>
									</Button>
									<Button variant="primary" size="sm" onClick={() => props.deletePost(el._id)}>
										remove
									</Button>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default withRouter(PostsList);
