import React from 'react';
import { signUp } from '../authSlice';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import TextInput from '../../../components/textInput';
import AuthContainer from '../../../components/authContainer';
import PasswordInput from '../../../components/passwordInput';
import T from '../../../../core/translations/translations.json';
import { signUpValidation } from '../../../../core/helpers/authValidation';

const Register = () => {
    const dispatch = useDispatch();
    const { values, errors, isValid, handleChange, handleSubmit } = useForm({
        initialState: {
            name: '',
            email: '',
            password: '',
        },
        validation: signUpValidation,
    });

    const handleRegister = () => {
        handleSubmit();
        if (isValid) {
            dispatch(signUp(values));
        }
    };

    return (
        <AuthContainer
            authType="register"
            onSave={handleRegister}
        >
            <TextInput
                name="name"
                label={T.NAME}
                placeholder={T.NAME}
                onChange={handleChange}
                errorText={errors.name}
            />

            <TextInput
                type="email"
                name="email"
                label={T.EMAIL}
                placeholder={T.EMAIL}
                onChange={handleChange}
                errorText={errors.email}
            />

            <PasswordInput
                name="password"
                label={T.PASSWORD}
                placeholder={T.PASSWORD}
                onChange={handleChange}
                errorText={errors.password}
            />
        </AuthContainer>
    );
};

export default Register;
