import React from 'react';
import { signUp } from '../authSlice';
import Input from '../../../components/input';
import { useForm } from '../../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import AuthContainer from '../../../components/authContainer';
import PasswordInput from '../../../components/passwordInput';
import T from '../../../../core/translations/translations.json';
import { signUpValidation } from '../../../../core/helpers/authValidation';
import { authPendingSelector } from '../../../../stateManagement/selectors/auth';

const Register = () => {
	const dispatch = useDispatch();
	const pending = useSelector(authPendingSelector);
	const { values, errors, isValid, handleChange } = useForm({
		initialState: {
			age: '',
			name: '',
			email: '',
			password: ''
		},
		validation: signUpValidation
	});

	const handleRegister = () => {
		if(isValid) {
			dispatch(signUp(values));
		}
	};

	return (
		<AuthContainer
			position="center"
			authType="register"
			onSave={handleRegister}
			saveButtonLoading={pending}
		>
			<Input
				name="name"
				label={T.NAME}
				placeholder={T.NAME}
				onChange={handleChange}
				errorText={errors.name}
			/>

			<Input
				type="email"
				name="email"
				label={T.EMAIL}
				placeholder={T.EMAIL}
				onChange={handleChange}
				errorText={errors.email}
			/>

			<Input
				name="age"
				type="number"
				value={values.age}
				placeholder={T.AGE}
				onChange={handleChange}
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
