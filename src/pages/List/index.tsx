import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from "react-router-dom";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfmonths from "../../utils/months";

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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const { type } = useParams()

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])

    const linecolor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type])

    const listData = useMemo(() => {
        if (type === 'entry-balance') {
            return gains;
        } else {

            return expenses;
        }

    }, [type])



    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
                uniqueYears.sort()

                setYearSelected(String(year))
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [listData])

    const months = useMemo(() => {
        return listOfmonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, [])

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());
            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredData.map(item => {
            return {
                id: String(new Date().getTime() + item.amount),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frenquency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#e44c4e' : '#4e41f0',
            }
        })
        setData(formattedData)
    }, [listData, monthSelected, yearSelected, data.length]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={linecolor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
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