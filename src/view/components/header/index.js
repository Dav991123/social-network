import React from 'react';
import Profile from './profile';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../../routing/router';
import { authSelector } from '../../../stateManagement/selectors/auth';
import './index.scss';

const Header = () => {
	const history = useHistory();

	const isAuth = useSelector(authSelector);
	const goHome = () => {
		history.push(ROUTE_CONSTANTS.POSTS);
	};

	return (
		<div className="main_header_container">
			<div className="header_content">
				<h2 onClick={goHome}>Social Network</h2>

				{isAuth && <Profile/>}
			</div>
		</div>
	);
};

export default Header;
