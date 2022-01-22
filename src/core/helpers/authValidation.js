//input type validation

const emailValidation = (value, errors) => {
	if(!value) {
		errors.email = 'Email required';
	}
};

const passWordValidation = (value, errors) => {
	if(!value) {
		errors.password = 'Password required';
	} else if(value.length < 6) {
		errors.password = 'password should contain at least 6 characters';
	}
};


//form type validation
export const signInValidation = values => {
	const errors = {};
	emailValidation(values.email, errors);
	passWordValidation(values.password, errors);
	return errors;
};

export const signUpValidation = values => {
	const errors = {};

	if(!values.name) {
		errors.name = 'Name required';
	}
	emailValidation(values.email, errors);
	passWordValidation(values.password, errors);

	return errors;
};
