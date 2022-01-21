import { useState, useEffect } from 'react';

export const useForm = ({ initialState, validation }) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const handleChange = ({ target: { name, value } }) => {
        setValues(v => ({ ...v, [name]: value }));
    };

    const handleSubmit = e => {
        setErrors(validation(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (isSubmitting) {
            setErrors(validation(values));
        }
    }, [values]);

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [errors, values]);

    return {
        errors,
        values,
        isSubmitting,
        handleChange,
        handleSubmit,
        isValid: !isDisabled && isSubmitting,
    };
};
