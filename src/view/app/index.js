import React from 'react';
import Routes from '../components/routerOutlet';
import { rootRoutes } from '../../routing/router';
import './index.scss';

const App = () => {
    return (
        <div>
            <Routes routes={rootRoutes}/>
        </div>
    )
};

export default App;