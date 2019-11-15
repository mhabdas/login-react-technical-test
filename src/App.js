import React from "react";
import LogInForm from "./containers/LogInForm";
import CenteredContainer from "./components/CenteredContainer/CenteredContainer";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./utils/theme";
import {ReducerProvider} from "./utils/reducer";

const App = () => (
  <ThemeProvider theme={theme}>
    <CenteredContainer>
      <ReducerProvider>
        <LogInForm />
      </ReducerProvider>
    </CenteredContainer>
  </ThemeProvider>
);

export default App;
