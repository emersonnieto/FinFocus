import React, { Fragment } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/GlobalStyles";

import Dashboard from "./components/Layout";
import dark from "./styles/themes/dark"

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Dashboard />
        </ThemeProvider>
    );

}

export default App;