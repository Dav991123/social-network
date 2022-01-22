import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../router';
import { useSelector } from 'react-redux';
import { authSelector } from '../../stateManagement/selectors/auth';

const IsNotAuthLayer = ({ children }) => {
    const isAuth = useSelector(authSelector);
    return isAuth ? <Redirect to={ROUTE_CONSTANTS.TASK_HISTORY}/> : children;
};

export default IsNotAuthLayer;
