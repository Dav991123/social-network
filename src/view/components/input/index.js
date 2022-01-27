import React, { useEffect, useState } from 'react';
import useTranslation from '../../../hooks/useTranslation';
import './index.scss';

const TextInput = ({
                       name,
                       label,
                       readOnly,
                       onChange,
                       errorText,
                       placeholder,
                       type = 'text',
                       value: controlledValue,
                       ...restProps
                   }) => {
    const translate = useTranslation();
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(controlledValue)
    }, [controlledValue]);

    const handleChange = (event) => {
        const { value = '' } = event.target;
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
                    readOnly={readOnly}
                    value={value ?? ''}
                    onChange={handleChange}
                    placeholder={translate(placeholder)}
                    className="min_inp_style"
                    {...restProps}
                />
            </label>

        </div>

    );
};

export default TextInput;
