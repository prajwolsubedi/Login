import { Typography, TypographyProps } from '@mui/material';

interface FormFooterSectionProps {
    children: React.ReactNode;
    color: string;
    marginLeft: string;
    marginRight: string;
}

const FormFooterSection = ({ children, color, marginLeft, marginRight }: FormFooterSectionProps) => {
    return (
        <Typography
            sx={{
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'underline',
                fontSize: '12px',
                color: color,
                cursor: 'pointer',
                paddingTop: '8px',
                marginLeft: marginLeft,
                marginRight: marginRight,
                fontWeight: "400"
            }}
        >
            {children}
        </Typography>
    );
};

export default FormFooterSection;
