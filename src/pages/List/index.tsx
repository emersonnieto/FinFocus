import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from "react-router-dom";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frenquency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);

    const { type } = useParams()

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])

    const linecolor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type])

    console.log(type);

    const listData = useMemo(() => {
        if (type === 'entry-balance') {
            return gains;
        } else {

            return expenses;
        }

    }, [type])

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
        { value: 6, label: 'Junho' },
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro' },
        { value: 11, label: 'Novembro' },
        { value: 12, label: 'Dezembro' },
    ]

    const years = [
        { value: 2023, label: 2023 },
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 },
    ]


    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frenquency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#e44c4e' : '#4e41f0',
            }
        })

        setData(response)
    }, [data.length, listData]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={linecolor}>
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
                {
                    data.map((item, index) => {
                        return (
                            <HistoryFinanceCard
                                key={index}
                                tagColor={item.tagColor}
                                title={item.description}
                                subTitle={item.dateFormatted}
                                amount={item.amountFormatted}
                            />
                        )
                    })
                }
            </Content>

        </Container>
    );
};

export default List;