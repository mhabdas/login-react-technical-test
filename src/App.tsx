import React, { FunctionComponent } from "react";
import LogInForm from "./containers/LogInForm";
import CenteredContainer from "./components/CenteredContainer/CenteredContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <CenteredContainer>
      <LogInForm />
    </CenteredContainer>
  </ThemeProvider>
);

export default App;
