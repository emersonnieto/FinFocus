import React, { ReactNode } from "react";
import { Container } from "./styles";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

interface ChildrenProps {
  children: ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Layout;