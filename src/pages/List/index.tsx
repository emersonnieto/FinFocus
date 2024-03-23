import React, { ReactNode } from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

interface ChildrenProps {
    children: ReactNode;
}

const List: React.FC<ChildrenProps> = ({ children }) => {

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' },
    ]

    const years = [
        { value: 2023, label: 2023 },
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 },
    ]

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#e44c4e">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
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