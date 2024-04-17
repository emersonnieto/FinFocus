import React, { useMemo, useState, useEffect } from "react";
import { Content, Filters } from "./styles";
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
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [selectdFrequency, setSelectdFrenquency] = useState(['recorrente', 'eventual']);

    const { type } = useParams()

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])

    const linecolor = useMemo(() => {
        return type === 'entry-balance' ? '#03b885' : '#E44C4E'
    }, [type])

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type])



    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        let latestYear: number | null = null;
    
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
    
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
                if (latestYear === null || year > latestYear) {
                    latestYear = year;
                }
            }
        });
    
        if (latestYear !== null) {
            setYearSelected(latestYear);
        }
    
        return uniqueYears.map(year => ({
            value: year,
            label: year
        }));
    }, [listData]);

    const months = useMemo(() => {
        return listOfmonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, [])

    const handleFrequencyClick = (frequency: string) => {
        const alredySelect = selectdFrequency.findIndex(item => item === frequency)


        if (alredySelect >= 0) {
            const filtered = selectdFrequency.filter(item => item !== frequency)
            setSelectdFrenquency(filtered)
        } else {
            setSelectdFrenquency((prev) => [...prev, frequency])

        }
    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month)
            setMonthSelected(parseMonth)
        }catch(error) {
            throw new Error('invalid month value. Is accept 0 - 24')
        }
    }

    const handlYearSelected = (year: string) => {
        try {
            const parseYear = Number(year)
            setYearSelected(parseYear)
        }catch(error) {
            throw new Error('invalid year value. Is accept integer numbers')
        }
    }

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return month === monthSelected && year === yearSelected && selectdFrequency.includes(item.frequency);
        });

        const formattedData = filteredData.map(item => {
            return {
                id: String(new Date().getTime() + item.amount),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frenquency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency !== 'recorrente' ? '#f7931b' : '#4e41f0',
            }
        })
        setData(formattedData)
    }, [listData, monthSelected, yearSelected, data.length, selectdFrequency]);

    return (
        <main>
            <ContentHeader title={title} linecolor={linecolor}>
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => handlYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                    ${selectdFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual
                    ${selectdFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
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

        </main>
    );
};

export default List;