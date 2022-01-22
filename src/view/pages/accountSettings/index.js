import React, { useEffect } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import { useForm } from '../../../hooks/useForm';
import { editUserData } from '../auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import T from '../../../core/translations/translations';
import useTranslation from '../../../hooks/useTranslation';
import { authPendingSelector, userSelector } from '../../../stateManagement/selectors/auth';
import './index.scss';

const AccountSettings = () => {
	const dispatch = useDispatch();
	const translate = useTranslation();
	const user = useSelector(userSelector);
	const pending = useSelector(authPendingSelector);
	const { values, errors, isValid, handleChange, setValues } = useForm({
		initialState: {
			age: '',
			name: '',
			email: ''
		}
	});

	useEffect(() => {
		const { name, age, email } = user;
		setValues({
			name, age, email
		});
	}, [ user ]);

	const handleSave = (e) => {
		e.preventDefault();
		const { email, ...restData } = values;
		dispatch(editUserData(restData));
	};

	return (
		<div className="account_settings_container">
			<h2 className="title">{translate(T.ACCOUNT_SETTINGS)}</h2>

			<div className="form_content">
				<form onSubmit={handleSave}>
					<Input
						type="text"
						name="name"
						value={values.name}
						placeholder={T.NAME}
						onChange={handleChange}
					/>

					<Input
						name="age"
						type="number"
						value={values.age}
						placeholder={T.AGE}
						onChange={handleChange}
					/>

					<Input
						readOnly
						type="email"
						name="email"
						value={values.email}
						placeholder={T.EMAIL}
						onChange={handleChange}
					/>

					<Button
						text={T.SAVE}
						isLoading={pending}
					/>
				</form>
			</div>
		</div>
	);
};

export default AccountSettings;
