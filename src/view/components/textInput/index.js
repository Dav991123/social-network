import React, { useState } from 'react';
import useTranslation from '../../../hooks/useTranslation';
import './index.scss';

const TextInput = ({
    name,
    label,
    onChange,
    type="text",
    placeholder,
    value: controlledValue,
}) => {
    
    const translate = useTranslation();
    const [ value, setValue ] = useState(controlledValue);

    const handleChange = (event) => {
		let { value = '' } = event.target;
		setValue(value);
		onChange(event);
	};

    return (
        <div className="text_input_container">
            <label>
                <h3>{translate(label)}</h3>
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
    
    )
};

export default TextInput;