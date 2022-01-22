import { lazy } from 'react';
import IsAuthLayer from './layers/isAuthLayer';
import IsNotAuthLayer from './layers/IsNotAuthLayer';
import defineGuards from './defineGuards/defineGuards';

const Posts = lazy(() => import('../view/pages/posts'));
const Login = lazy(() => import('../view/pages/auth/login'));
const Register = lazy(() => import('../view/pages/auth/register'));
const AccountSettings = lazy(() => import('../view/pages/accountSettings'));

export const ROUTE_CONSTANTS = {
	EMPTY: '/',
	POSTS: '/posts',
	LOGIN: '/login',
	REGISTER: '/register',
	ACCOUNT_SETTINGS: '/account-settings'
};

export const rootRoutes = [
	{
		path: ROUTE_CONSTANTS.POSTS,
		component: () => defineGuards([ IsAuthLayer ], Posts),
		exact: true
	},

	{
		path: ROUTE_CONSTANTS.LOGIN,
		component: () => defineGuards([ IsNotAuthLayer ], Login),
		exact: true
	},

	{
		path: ROUTE_CONSTANTS.REGISTER,
		component: () => defineGuards([ IsNotAuthLayer ], Register),
		exact: true
	},

	{
		path: ROUTE_CONSTANTS.ACCOUNT_SETTINGS,
		component: () => defineGuards([ IsAuthLayer ], AccountSettings),
		exact: true
	}
];
