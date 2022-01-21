import React, { useState } from 'react';
import TextInput from '../../../components/textInput';
import PasswordInput from '../../../components/passwordInput';
import T from '../../../../core/translations/translations.json';
import AuthContainer from '../../../components/authContainer';
import { useDispatch } from 'react-redux';
import { signUp } from '../authSlice';
import { useForm } from '../../../../hooks/useForm';
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

    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
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
