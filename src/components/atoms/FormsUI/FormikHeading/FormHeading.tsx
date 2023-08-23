import { Box, Typography } from "@mui/material";

const FormHeading = () => {
  return (
    <>
      <Typography>Sign in</Typography>
      <Box sx={{ display: "flex" }}>
        <Typography>Don't have an account?</Typography>
        <Typography
          onClick={handleAuthChange}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Sign up
        </Typography>
      </Box>
    </>
  );
};

export default FormHeading;


/*
      <Typography>Sign in</Typography>
      <Box sx={{ display: "flex" }}>
        <Typography>Don't have an account?</Typography>
        <Typography
          onClick={handleAuthChange}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Sign up
        </Typography>
      </Box>
*/