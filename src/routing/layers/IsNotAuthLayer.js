import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../router';
import { authSelector } from '../../stateManagement/selectors/auth';

const IsNotAuthLayer = ({ children }) => {
	const isAuth = useSelector(authSelector);
	return isAuth ? <Redirect to={ROUTE_CONSTANTS.POSTS}/> : children;
};

export default IsNotAuthLayer;
