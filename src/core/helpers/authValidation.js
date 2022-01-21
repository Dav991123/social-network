export const signInValidation = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email required';
    }

    if (!values.password) {
        errors.password = 'Password required';
    } else if (values.password.length < 6) {
        errors.password = 'password should contain at least 6 characters';
    }

    return errors;
};

export const signUpValidation = values => {
    const errors = {};

    return errors;
};
