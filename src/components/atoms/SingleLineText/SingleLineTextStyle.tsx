import { Typography, Box } from '@mui/material';
interface SingleLineTextStyleProps {
    text: string;
}
const textStyles = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '12px',
    color: '#000',
    fontWeight: 400
};

const SingleLineTextStyle = ({ text }: SingleLineTextStyleProps) => {
    // const classes = useStyles();
    return <Typography sx={textStyles}>{text}</Typography>;
};

export default SingleLineTextStyle;
