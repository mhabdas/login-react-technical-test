import React from "react";
import LogInForm from "./containers/LogInForm/LogInForm";
import CenteredContainer from "./components/CenteredContainer/CenteredContainer";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./utils/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <CenteredContainer>
      <LogInForm />
    </CenteredContainer>
  </ThemeProvider>
);

export default App;
