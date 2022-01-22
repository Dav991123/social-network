import { Switch, Route } from 'react-router-dom';

const RouterOutlet = ({ routes }) => {
	return (
		<Switch>
			{
				routes.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact}
						>
							<route.component/>
						</Route>
					);
				})
			}
		</Switch>
	);
};

export default RouterOutlet;