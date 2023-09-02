import { Button, ButtonProps, CircularProgress } from '@mui/material';
type SubmitButtonProps = {
    children: string;
    submitting: boolean;
    vairant?: 'text' | 'contained' | 'outlined';
    isValid: boolean;
    color?: 'success' | 'error' | 'secondary' | 'primary' | 'inherit' | 'info' | 'warning';
};

const configButton: ButtonProps = {
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

const SubmitButton = ({ children, submitting, isValid, ...otherProps }: SubmitButtonProps & ButtonProps) => {
    return (
        <Button type="submit" color="primary" variant="contained" {...configButton} {...otherProps}>
            {submitting && isValid ? <CircularProgress /> : children}
        </Button>
    );
};

export default SubmitButton;
