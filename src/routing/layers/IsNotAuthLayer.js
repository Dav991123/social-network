import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../router';

const IsNotAuthLayer = ({ children }) => {
    const isAuth = false;

	return isAuth ? <Redirect to={ROUTE_CONSTANTS.EMPTY}/> : children;
};

export default IsNotAuthLayer