import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard"; 
import List from "./pages/List";

import dark from "./styles/themes/dark";

interface ChildrenProps {
  children?: React.ReactNode;
}

const App: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Layout>
                <List>
                    {children}
                </List>
            </Layout>
        </ThemeProvider>
    );
}

export default App;