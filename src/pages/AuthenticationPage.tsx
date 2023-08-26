import SignIn from "../components/templates/SignIn/SignIn";
import SignUp from "../components/templates/SignUp/SignUp";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../store/store";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F2FF",
  },
});

const Authentication = () => {
  const classes = useStyles();
  const isSignIn = useAppSelector((state) => state.authentication.isSignIn);
  return (
    <Box className={classes.container}>
      {isSignIn ? <SignIn /> : <SignUp />}
    </Box>
  );
};

export default Authentication;
