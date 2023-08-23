import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { toggleAuthSelection } from '../../store/slices/authSelectionSlice';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {},
});

interface Props {
  heading: string;
  text: string;
  link: string;
}

const FormTopSection = ({ heading, text, link }: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleAuthChange = () => {
    dispatch(toggleAuthSelection());
  };
  return (
    <Box className={classes.container} >
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '20px',
          fontFamily: 'Poppins, sans-serif',
          color: "#000",
        }}
      >
        {heading}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '400',
            fontSize: '12px',
            color: "#000"
          }}
        >
          {text}
        </Typography>
        {link !== '' ? (
          <Typography
            onClick={handleAuthChange}
            sx={{
              fontFamily: 'Poppins, sans-serif',
              paddingLeft: '5px',
              textDecoration: 'underline',
              color: '#0F6EFB',
              cursor: 'pointer',
              fontWeight: 'light',
              fontSize: '0.9rem',
            }}
          >
            {link}
          </Typography>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default FormTopSection;