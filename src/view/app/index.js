import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/header';
import Routes from '../components/routerOutlet';
import { rootRoutes } from '../../routing/router';
import { authRefresh } from '../pages/auth/authSlice';
import './index.scss';

const App = () => {
	const [ isLoading, seIsLoading ] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		firstRefresh();
	}, []);

	const firstRefresh = () => {
		dispatch(authRefresh());
		seIsLoading(false);
	};

	if(isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header/>
			<Routes routes={rootRoutes}/>
		</div>
	);
};

export default App;
