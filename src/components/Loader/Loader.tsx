import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CenteredContainer from "../CenteredContainer/CenteredContainer";

const Loader = () => (
  <CenteredContainer>
    <CircularProgress size={100} />
  </CenteredContainer>
);

export default Loader;
