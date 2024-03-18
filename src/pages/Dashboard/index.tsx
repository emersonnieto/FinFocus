import React, { ReactNode } from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

interface ChildrenProps {
  children: ReactNode;
}

const Dashboard: React.FC<ChildrenProps> = ({ children }) => {

  const options = [
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Emerson', label: 'Emerson'},
    {value: 'Ana', label: 'Ana'},
]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
          <SelectInput options={options}/>
      </ContentHeader>  
    </Container>
  );
};

export default Dashboard;