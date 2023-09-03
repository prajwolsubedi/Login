import { Button, ButtonProps, CircularProgress } from '@mui/material';
import './SubmitButtonStyles.css';

export type SubmitButtonProps = {
    children: string;
    isLoading?: boolean;
    isFetching?: boolean;
    submitting?: boolean;
    isFetched?: boolean;
    isSuccess?: boolean;
    vairant?: 'text' | 'contained' | 'outlined';
    isValid?: boolean;
    successText?: string;
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

const SubmitButton = ({ children, isLoading, isFetching, isFetched, submitting, isSuccess, successText, isValid, ...otherProps }: SubmitButtonProps & ButtonProps) => {
    return (
        <Button type="submit" color={isSuccess ? 'success' : 'primary'} variant="contained" {...configButton} {...otherProps}>
            {isSuccess ? successText : isLoading ? <CircularProgress sx={{ color: '#ffffff' }} /> : children}
        </Button>
    );
};

export default SubmitButton;
