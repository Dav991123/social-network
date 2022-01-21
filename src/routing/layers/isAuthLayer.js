import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../router';
import { useSelector } from 'react-redux';
import { authSelector } from '../../stateManagement/selectors/auth';

const IsAuthLayer = ({ children }) => {
    const isAuth = useSelector(authSelector);
    return isAuth ? children : <Redirect to={ROUTE_CONSTANTS.LOGIN}/>;
};

export default IsAuthLayer;
