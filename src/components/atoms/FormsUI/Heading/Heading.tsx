import { SvgIcon, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    titleContainer: {
        display: 'inline-flex'
        // border: '2px solid red'
    },
    titleFirst: {
        color: '#3D3D3D'
    },
    titleSecond: {
        fontSize: '1.2rem',
        color: '#326EB4'
    }
});

const Heading = () => {
    const classes = useStyles();
    // return <SvgIcon sx={{width: "203px", height: "54px"}} component={hydrax} inheritViewBox />;
    return <Typography sx={{fontSize: "1.5rem"}}>💙</Typography>;
};
export default Heading;
