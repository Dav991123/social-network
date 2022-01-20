import React from 'react';
import TextInput from '../../../components/textInput';
import PasswordInput from '../../../components/passwordInput';
import T from '../../../../core/translations/translations.json';
import AuthContainer from '../../../components/authContainer';

const Register = () => {

    const handleChangeInput = () => {

    };

    return (
        <AuthContainer
            authType="register"
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
    )
};

export default Register;