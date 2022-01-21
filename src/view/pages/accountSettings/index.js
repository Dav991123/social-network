import React from 'react';
import T from '../../../core/translations/translations';
import useTranslation from '../../../hooks/useTranslation';
import './index.scss';

const AccountSettings = () => {
    const translate = useTranslation();

    return (
        <div className="account_settings_container">
            <h2>{translate(T.ACCOUNT_SETTINGS)}</h2>
        </div>
    );
};

export default AccountSettings;
