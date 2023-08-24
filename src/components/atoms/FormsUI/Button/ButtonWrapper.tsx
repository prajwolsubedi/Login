import { Button, ButtonProps } from '@mui/material';
import { useFormikContext } from 'formik';


const ButtonWrapper = ({ children, ...otherProps }: ButtonProps) => {

    const { submitForm } = useFormikContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('on Submit called.')
        submitForm();
    };
    const configButton: ButtonProps = {
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
        onClick: handleSubmit,
        sx: {
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: '500',
            color: '#fff',
            padding: '10px',
            textTransform: 'none',
            height: '52px'
        }
    };
    return (
        <Button {...configButton} {...otherProps}>
            {children}
        </Button>
    );
};

export default ButtonWrapper;
