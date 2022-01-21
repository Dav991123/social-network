import React, { useState, useEffect } from 'react';
import Routes from '../components/routerOutlet';
import { rootRoutes } from '../../routing/router';
import { useDispatch } from 'react-redux';
import './index.scss';
import { authRefresh } from '../pages/auth/authSlice';

const App = () => {
    const [ isLoading, seIsLoading ] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        firstRefresh();
    }, []);

    const firstRefresh = () => {
        dispatch(authRefresh())
        seIsLoading(false);
    };

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Routes routes={rootRoutes}/>
        </div>
    );
};

export default App;
