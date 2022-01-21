import TextInput from '../textInput';

const PasswordInput = ({
                           ...restProps
                       }) => {
    return (
        <TextInput
            type="password"
            className="min_inp_style"
            {...restProps}
        />
    );
};

export default PasswordInput;
