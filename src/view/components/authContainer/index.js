import React from 'react';
import Button from '../button';
import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../../routing/router';
import useTranslation from '../../../hooks/useTranslation';
import T from '../../../core/translations/translations.json';
import './index.scss';

const AUTH_MODEL = {
    register: {
        linkText: T.LOGIN,
        title: T.REGISTER,
        buttonText: T.REGISTER,
        linkPath: ROUTE_CONSTANTS.LOGIN
    },
    login: {
        title: T.LOGIN,
        buttonText: T.LOGIN,
        linkText: T.REGISTER,
        linkPath: ROUTE_CONSTANTS.REGISTER
    }
};
const AuthContainer = ({
                           onSave,
                           authType,
                           children,
                           position,
                           saveButtonLoading
                       }) => {
    const translate = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(e);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={`auth_container ${position}`}>
                <div className="form_content">
                    <h2 className="title">{translate(AUTH_MODEL[authType].title)}</h2>
                    {children}

                    <div className="footer">
                        <Link
                            to={AUTH_MODEL[authType].linkPath}
                        >
                            {translate(AUTH_MODEL[authType].linkText)}
                        </Link>
                        <Button
                            isLoading={saveButtonLoading}
                            text={translate(AUTH_MODEL[authType].buttonText)}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AuthContainer;
