import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes";
import dark from "./styles/themes/dark";

interface ChildrenProps {
    children?: React.ReactNode;
}

const App: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
}

export default App;