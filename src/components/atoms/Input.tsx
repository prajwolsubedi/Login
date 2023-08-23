import { TextField, TextFieldVariants } from "@mui/material";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@mui/styles";
interface Props {
  id: string;
  label: string;
  variant: TextFieldVariants;
  size?: "small" | "medium";
}

// const useStyles = makeStyles({
//   customInputButtonContainer: {
//     "& .MuiInputLabel-root": {
//       // Apply custom label styles here
//       fontFamily: "'Poppins', sans-serif",
//       fontSize: "16px",
//       lineHeight: "24px",
//       fontWeight: 400,
//       color: "#000000",
//     },
//   },
// });
// const classes = useStyles();
// <div className={classes.customInputButtonContainer}>
// </div>

const Button = ({ id, label, variant, size }: Props) => {
  return (
    <TextField id={id} label={label} variant={variant} size={size} fullWidth />
  );
};

export default Button;
