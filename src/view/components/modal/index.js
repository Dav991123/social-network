import React from 'react';
import useTranslation from '../../../hooks/useTranslation';
import T from '../.././../core/translations/translations.json'
import Button from '../button';
import './index.scss';

const Modal = ({
    title,
    onOk,
    onClose,
    children
}) => {
    const translate = useTranslation();

    return (
        <div className="modal_main_container">
            <div className="modal_main_content">
                <div className="modal_head">
                    <span className="close">x</span>
                    <h2>{translate(title)}</h2>
                </div>

                <div className="modal_body">
                    {children}
                </div>

                <div className="modal_footer">
                    <Button
                        text={T.SAVE}
                    />

                </div>
            </div>
        </div>
    )
};

export default Modal;