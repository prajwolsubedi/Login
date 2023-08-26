import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';

export interface TestFieldWrapperProps {
    name: string | null;
    label: string | null;
}

const TextFieldWrapper = ({ name, ...otherProps }: any) => {
    const [field, meta, helpers] = useField(name);
    // console.log(field,meta,helpers)

    const labelStyles = {
        color: '#000',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: 400
    };
    // const errorStyles = {
    //   fontSize: "12px", // Adjust the font size for the error message
    //   color: "red", // Customize the color for the error message
    // };
    const configTextfield: TextFieldProps = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        size: 'large'
    };
    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }
    return (
        <TextField
            inputProps={{
                style: {
                    height: '19px'
                }
            }}
            {...configTextfield}
            InputLabelProps={{
                style: labelStyles
            }}
        />
    );
};

export default TextFieldWrapper;
