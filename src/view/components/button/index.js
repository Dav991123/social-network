import React from 'react';
import useTranslation from '../../../hooks/useTranslation';
import './index.scss';

const Button = ({
                    text = '',
                    children,
                    onClick,
                    isLoading,
                    ...restProps
                }) => {
    const translate = useTranslation();

    return (
        <button
            onClick={onClick}
            className="btn_container"
            {...restProps}
        >
            {isLoading && <span className="loading"/>}
            <div>{children || translate(text)} </div>
        </button>
    );
};

export default Button;
