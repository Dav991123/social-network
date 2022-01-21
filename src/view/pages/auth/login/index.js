import React, { useState } from 'react';
import { signIn } from '../authSlice';
import TextInput from '../../../components/textInput';
import { useSelector, useDispatch } from 'react-redux';
import useTranslation from '../../../../hooks/useTranslation';
import AuthContainer from '../../../components/authContainer';
import T from '../../../../core/translations/translations.json';
import './index.scss';

const Login = () => {
    const dispatch = useDispatch();
    const translate = useTranslation();

    const [inputValues, setInputValues] = useState({
        email: 'sargsyand89@gmail.com',
        password: '20022002Dav'
    });

    const handleChangeInput = ({ target: { name, value } }) => {
        setInputValues(v => ({ ...v, [name]: value }));
    };

    const handleLogin = () => {
        let { email, password } = inputValues;
        email = email.trim();
        password = password.trim();

        dispatch(signIn({
            email, password
        }));
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
                onChange={handleChangeInput}
            />

            <TextInput
                name="password"
                label={T.PASSWORD}
                placeholder={T.PASSWORD}
                onChange={handleChangeInput}
            />
        </AuthContainer>

    );
};

export default Login;
