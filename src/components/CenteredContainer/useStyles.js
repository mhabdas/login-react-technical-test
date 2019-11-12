import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
    margin: 0,
    padding: 0
  }
}));
