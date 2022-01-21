import React, { useState } from 'react';
import useTranslation from '../../../hooks/useTranslation';
import './index.scss';

const TextInput = ({
                       name,
                       label,
                       onChange,
                       errorText,
                       placeholder,
                       type = 'text',
                       value: controlledValue,
                   }) => {

    const translate = useTranslation();
    const [value, setValue] = useState(controlledValue);

    const handleChange = (event) => {
        let { value = '' } = event.target;
        setValue(value);
        onChange(event);
    };

    return (
        <div className="text_input_container">
            <label>
                <h3 className="label_title">
                    <span>{translate(label)}</span>
                    {errorText && <span className="error_text_content">({errorText})</span>}
                </h3>
                <input
                    type={type}
                    name={name}
                    value={value ?? ''}
                    onChange={handleChange}
                    className="min_inp_style"
                    placeholder={translate(placeholder)}
                />
            </label>

        </div>

    );
};

export default TextInput;
