import { Typography, TypographyProps } from '@mui/material';
const FormFooterSection = ({children, textAlign, color}: TypographyProps) => {
  return (

      <Typography
        sx={{
          width: "fit-content",
          textAlign: textAlign,
          fontFamily: 'Poppins, sans-serif',
          textDecoration: 'underline',
          fontSize: "16px",
          color: color,
          cursor: 'pointer',
          paddingTop: "5px",
          alignItems: 'center',
          // border: "2px solid red"
        }}
      > 
        {children}
      </Typography>
    // </Box>
  );
};

export default FormFooterSection;
