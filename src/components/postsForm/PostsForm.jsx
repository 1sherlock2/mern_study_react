import React from 'react';
import './PostsForm.scss';
import { Field, reduxForm } from 'redux-form';
import { createFrom } from '../utils/forms/CreateForm';
import { Input } from '../utils/forms/component/Input';
import { NavLink } from 'react-router-dom';
import { maxLength, minLength, requiredField } from '../utils/valodators/Valitators';
import { Textarea } from '../utils/forms/component/Textarea';

let maxLengthPostsFormTitle = maxLength(20);
const minLengthPostsFormTitle = minLength(5);
const maxLengthPostsFormDescription = maxLength(50);
const minLengthPostsFormDescription = minLength(10);
const minLengthPostsFormText = minLength(5);

const PostsForm = props => {
	return (
		<div>
			<div>
				<NavLink to={'/'}>
					<button type='button' className='btn__posts btn-primary btn-lg nav_button_form'>
						Back
					</button>
				</NavLink>
			</div>
			<div className='posts_content'>
				<form onSubmit={props.handleSubmit}>
					<div className='form-group'>
						<label htmlFor='title'> Title </label>
						{createFrom('title', Input, {}, 'form-control', 'submitTitle', 'enter title text', [
							minLengthPostsFormTitle,
							maxLengthPostsFormTitle,
							requiredField
						])}
					</div>
					<div className='form-group form-check'>
						<label className='form-check-label' htmlFor='description'>
							Description
						</label>
						{createFrom('description', Input, {}, 'form-control', 'description', 'Add new text', [
							maxLengthPostsFormDescription,
							minLengthPostsFormDescription
						])}
					</div>
					<div className='form-group'>
						<label htmlFor='image'>Image url</label>
						{createFrom('imageURL', Input, 'text', 'form-control', 'submitImageURL', 'enter image url', requiredField)}
					</div>
					<div className='form-group'>
						<label htmlFor='exampleFormControlTextarea1'> Your text </label>
						{createFrom('text', Textarea, {}, 'form-control', 'exampleFormControlTextarea1', 'enter your text', [minLengthPostsFormText])}
					</div>
					<button type='submit' className='btn btn-primary'>
						Send post
					</button>
				</form>
			</div>
		</div>
	);
};
const PostsFormReduxForm = reduxForm({ form: 'postsForm' })(PostsForm);
export default PostsFormReduxForm;
