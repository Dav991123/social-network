import { useEffect, useState } from 'react';
import useDidUpdateEffect from './useDidUpdateEffect';

export const useForm = ({ initialState, validation }) => {
	const [ values, setValues ] = useState(initialState);
	const [ errors, setErrors ] = useState({});
	const [ isDisabled, setIsDisabled ] = useState(false);
	const handleChange = ({ target: { name, value } }) => {
		setValues(v => ({ ...v, [name]: value }));
	};

	useDidUpdateEffect(() => {
		if(validation) {
			setErrors(validation(values));
		}
	}, [ values ]);

	useEffect(() => {
		setIsDisabled(!Object.keys(errors).length);
	}, [ errors, values ]);

	return {
		errors,
		values,
		setValues,
		handleChange,
		isValid: !isDisabled
	};
};
