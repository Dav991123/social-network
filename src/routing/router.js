import { lazy } from 'react';
import IsAuthLayer from './layers/isAuthLayer';
import IsNotAuthLayer from './layers/IsNotAuthLayer';
import defineGuards from './defineGuards/defineGuards';

const Profile = lazy(() => import('../view/pages/profile'));
const Login = lazy(() => import('../view/pages/auth/login'));
const Register = lazy(() => import('../view/pages/auth/register'));

export const ROUTE_CONSTANTS = {
    EMPTY: '/',
    LOGIN: '/login',
    PROFILE: '/profile',
    REGISTER: '/register',
};

export const rootRoutes = [
    {
        path: ROUTE_CONSTANTS.LOGIN,
        component: () => defineGuards([IsNotAuthLayer], Login),
        exact: true
    },
    {
        path: ROUTE_CONSTANTS.REGISTER,
        component: () => defineGuards([IsNotAuthLayer], Register),
        exact: true
    },
    {
        path: ROUTE_CONSTANTS.PROFILE,
        component: () => defineGuards([IsAuthLayer], Profile),
        exact: true
    }
];
