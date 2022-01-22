import React from 'react';
import Button from '../button';
import useTranslation from '../../../hooks/useTranslation';
import T from '../.././../core/translations/translations.json';
import './index.scss';

const Modal = ({
				   onOk,
				   title,
				   onClose,
				   children,
				   okButtonDisable
			   }) => {
	const translate = useTranslation();

	return (
		<div className="modal_main_container">
			<div className="modal_main_content">
				<div className="modal_head">
					<span className="close" onClick={onClose}>x</span>
					<h2>{translate(title)}</h2>
				</div>

				<div className="modal_body">
					{children}
				</div>

				<div className="modal_footer">
					<Button
						text={T.SAVE}
						onClick={onOk}
						disabled={okButtonDisable}
					/>

				</div>
			</div>
		</div>
	);
};

export default Modal;