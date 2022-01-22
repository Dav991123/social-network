import React from 'react';
import { useSelector } from 'react-redux';
import { ROUTE_CONSTANTS } from '../router';
import { Redirect } from 'react-router-dom';
import { authSelector } from '../../stateManagement/selectors/auth';

const IsAuthLayer = ({ children }) => {
	const isAuth = useSelector(authSelector);
	return isAuth ? children : <Redirect to={ROUTE_CONSTANTS.LOGIN}/>;
};

export default IsAuthLayer;
