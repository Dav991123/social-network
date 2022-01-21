import React, { useState } from 'react';
import { signIn } from '../authSlice';
import { useForm } from '../../../../hooks/useForm';
import TextInput from '../../../components/textInput';
import { useSelector, useDispatch } from 'react-redux';
import PasswordInput from '../../../components/passwordInput';
import AuthContainer from '../../../components/authContainer';
import T from '../../../../core/translations/translations.json';
import { signInValidation } from '../../../../core/helpers/authValidation';
import './index.scss';

const Login = () => {
    const dispatch = useDispatch();
    const { values, errors, isValid, handleChange, handleSubmit } = useForm({
        initialState: {
            email: 'sargsyand89@gmail.com',
            password: ''
        },
        validation: signInValidation,
    });

    const handleLogin = () => {
        handleSubmit();
        if (isValid) {
            let { email, password } = values;
            email = email.trim();
            password = password.trim();

            dispatch(signIn({
                email, password
            }));
        }
    };

    return (
        <AuthContainer
            authType="login"
            onSave={handleLogin}
        >
            <TextInput
                name="email"
                label={T.EMAIL}
                placeholder={T.EMAIL}
                value={values.email}
                onChange={handleChange}
                errorText={errors.email}
            />

            <PasswordInput
                name="password"
                label={T.PASSWORD}
                placeholder={T.PASSWORD}
                value={values.password}
                onChange={handleChange}
                errorText={errors.password}
            />
        </AuthContainer>
    );
};

export default Login;
