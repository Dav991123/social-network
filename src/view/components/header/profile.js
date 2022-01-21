import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userImg from '../../../core/images/user.png';
import T from '../../../core/translations/translations';
import useTranslation from '../../../hooks/useTranslation';
import { userSelector } from '../../../stateManagement/selectors/auth';
import { logOut } from '../../pages/auth/authSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const translate = useTranslation();
    const user = useSelector(userSelector);

    const handleLogOut = () => {
        dispatch(logOut());
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
                <span>{translate(T.ACCOUNT_SETTINGS)}</span>
                <span onClick={handleLogOut}>{translate(T.LOG_OUT)}</span>
            </div>
        </div>
    );
};

export default Profile;
