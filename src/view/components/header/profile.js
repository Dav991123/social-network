import React from 'react';
import { useHistory } from 'react-router-dom';
import userImg from '../../../core/images/user.png';
import { logOut } from '../../pages/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import T from '../../../core/translations/translations';
import useTranslation from '../../../hooks/useTranslation';
import { ROUTE_CONSTANTS } from '../../../routing/router';
import { userSelector } from '../../../stateManagement/selectors/auth';

const Profile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const translate = useTranslation();
    const user = useSelector(userSelector);

    const handleLogOut = () => {
        dispatch(logOut());
    };

    const handleRedirectAccountSettings = () => {
        history.push(ROUTE_CONSTANTS.ACCOUNT_SETTINGS);
    };

    return (
        <div className="profile_content">
            <div>
                <span> {translate(T.HI)} </span>,
                <span> {user.name || '....'} </span>
            </div>
            <img src={userImg} alt={user.name}/>

            <div className="drop_down_content">
                <span>{user.email || '....'}</span>
                <span onClick={handleRedirectAccountSettings}>{translate(T.ACCOUNT_SETTINGS)}</span>
                <span onClick={handleLogOut}>{translate(T.LOG_OUT)}</span>
            </div>
        </div>
    );
};

export default Profile;
