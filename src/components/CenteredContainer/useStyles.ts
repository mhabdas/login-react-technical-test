import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    margin: 0,
    padding: 0
  }
}));
