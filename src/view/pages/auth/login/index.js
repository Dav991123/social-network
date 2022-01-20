import React from 'react';
import TextInput from '../../../components/textInput';
import useTranslation from '../../../../hooks/useTranslation';
import AuthContainer from '../../../components/authContainer';
import T from '../../../../core/translations/translations.json';
import './index.scss';

const Login = () => {
    const translate = useTranslation();

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        console.log({
            name, value
        });
    };

    const handleLogin = () => {
        console.log('handleLogin');
    }

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

    )
};

export default Login;