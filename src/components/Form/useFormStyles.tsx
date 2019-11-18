import { makeStyles } from "@material-ui/core";

export const useFormStyles = makeStyles(theme => ({
  form: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    "& input": {
      padding: "1rem"
    },
    "& button": {
      margin: "1rem",
      fontWeight: "bold"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main
    }
  },
  error: {
    paddingTop: "0.5rem",
    color: theme.palette.primary.contrastText,
    fontSize: "0.75rem"
  }
}));
