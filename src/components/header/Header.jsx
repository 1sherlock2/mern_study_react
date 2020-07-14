import React from 'react';
import './Header.scss';
import { NavLink, withRouter } from 'react-router-dom';

const Header = props => {
	console.log(props);
	return (
		<div>
			{props.location.pathname === '/' ? (
				<div className='header-block' style={{ backgroundImage: `url(${props.defaultImageURL})` }}>
					<div className='container'>
						<div className='header-block__overlay'>
							<div className='header-block__center'>
								<h1> Привет </h1>
								<h5>
									{' '}
									Это простенький блог-сайт, добавь интересную историю о чем-либо, можешь прикрепить
									фотографию в ввиде ссылки на изображение в интернете, в дальнейшем я переработую эту
									технологию, но пока так){' '}
								</h5>
							</div>
						</div>
					</div>
				</div>
			) : (
				props.postById && (
					<div className='header-block' style={{ backgroundImage: `url(${props.postById.imageURL})` }}>
						<div className='container'>
							<div className='header-block__overlay'>
								<div className='header-block__center'>
									<h1> {props.postById.title} </h1>
									<h5> {props.postById.description} </h5>
								</div>
							</div>
						</div>
					</div>
				)
			)}
			<div className='add_posts_content'>
				<div className='addPosts_button'>
					<NavLink to='/posts/edit'>
						<button type='button' className='btn btn-outline-secondary button_add_post'>
							{' '}
							Add post
						</button>
					</NavLink>
				</div>
				<div>
					<button className='btn btn-primary button_exit' onClick={() => props.exitAccountDispatch()}>
						{' '}
						Exit
					</button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Header);
