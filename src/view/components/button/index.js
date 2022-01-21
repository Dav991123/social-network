import React from 'react';
import useTranslation from '../../../hooks/useTranslation';
import './index.scss';

const Button = ({
                    text = '',
                    children,
                    onClick,
                    ...restProps
                }) => {
    const translate = useTranslation();

    return (
        <button
            onClick={onClick}
            className="btn_container"
            {...restProps}
        >
            {children || translate(text)}
        </button>
    );
};

export default Button;
