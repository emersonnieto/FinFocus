import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";

interface ChildrenProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container>
      <ContentHeader />
    </Container>
  );
}

export default Dashboard;