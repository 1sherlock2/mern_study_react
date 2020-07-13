import React from 'react';
import './BackButtonPostList.scss';
import {NavLink} from 'react-router-dom';

const BackButton = (props) => {
	return (
		<NavLink to="/">
			<button className="btn btn-primary btn-lg back_buttons"> Back </button>
		</NavLink>
	);
};
export default BackButton;
