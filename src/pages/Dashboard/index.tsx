import React, { ReactNode } from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";

interface ChildrenProps {
  children: ReactNode;
}

const Dashboard: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container>
      <ContentHeader />   
    </Container>
  );
};

export default Dashboard;