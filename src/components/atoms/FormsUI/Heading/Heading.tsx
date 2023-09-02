import React from 'react';
import { SvgIcon } from "@mui/material";
import { ReactComponent as hydrax } from '../../../../assets/hydrax.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  titleContainer: {
    display: 'inline-flex',
    // border: '2px solid red'
  },
  titleFirst: {
    color: '#3D3D3D',
  },
  titleSecond: {
    fontSize: '1.2rem',
    color: '#326EB4',
  },
});

const Heading = () => {
  const classes = useStyles();
  return <SvgIcon sx={{width: "203px", height: "54px"}} component={hydrax} inheritViewBox />;
};
export default Heading;
