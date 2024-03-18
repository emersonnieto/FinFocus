import React, { ReactNode } from "react";
import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

interface ChildrenProps {
  children: ReactNode;
}

const List: React.FC<ChildrenProps> = ({ children }) => {

  const options = [
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Emerson', label: 'Emerson'},
    {value: 'Ana', label: 'Ana'},
]

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#fff">
          <SelectInput options={options}/>
      </ContentHeader> 
       <Content>
        <HistoryFinanceCard 
            cardColor="#313862"
            tagColor="#E44C4E"
            title="Conta"
            subTitle="18/03/2024"
            amount="R$ 2000"
        />
       </Content>

    </Container>
  );
};

export default List;