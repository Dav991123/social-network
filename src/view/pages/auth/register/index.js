import React, { useState } from 'react';
import TextInput from '../../../components/textInput';
import PasswordInput from '../../../components/passwordInput';
import T from '../../../../core/translations/translations.json';
import AuthContainer from '../../../components/authContainer';
import { useDispatch } from 'react-redux';
import { signUp } from '../authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChangeInput = ({ target: { name, value } }) => {
        setInputValues(v => ({ ...v, [name]: value }));
    };

    const handleRegister = () => {
        dispatch(signUp(inputValues));
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
                onChange={handleChangeInput}
            />

            <TextInput
                type="email"
                name="email"
                label={T.EMAIL}
                placeholder={T.EMAIL}
                onChange={handleChangeInput}
            />

            <PasswordInput
                name="password"
                label={T.PASSWORD}
                placeholder={T.PASSWORD}
                onChange={handleChangeInput}
            />
        </AuthContainer>
    );
};

export default Register;
