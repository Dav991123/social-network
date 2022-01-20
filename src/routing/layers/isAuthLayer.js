import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../router';

const IsAuthLayer = ({ children }) => {
    const isAuth = true;

    return isAuth ? children : <Redirect to={ROUTE_CONSTANTS.EMPTY}/>
};

export default IsAuthLayer;