import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../stateManagement/selectors/auth';
import Profile from './profile';
import './index.scss';

const Header = () => {
    const isAuth = useSelector(authSelector);

    return (
        <div className="main_header_container">
           <div className="header_content">
               <h2>Social Network</h2>

               {isAuth && <Profile />}
           </div>
        </div>
    );
};

export default Header;
