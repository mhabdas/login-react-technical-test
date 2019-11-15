import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./useStyles";

type CenteredContainerProps = {};

const CenteredContainer: FunctionComponent<CenteredContainerProps> = ({
  children
}) => {
  const classes = useStyles();
  return (
    <Grid
      color="primary"
      className={classes.main}
      container
      spacing={0}
      alignItems="center"
      justify="center"
      direction="column"
    >
      {children}
    </Grid>
  );
};

export default CenteredContainer;
