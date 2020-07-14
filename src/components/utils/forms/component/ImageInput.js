import React from 'react';
import { FormControl } from './formControl/FormControl';

export const ImageInput = props => {
	const { value, ...restProps } = props;
	return <input {...restProps} />;
};
