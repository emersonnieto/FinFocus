import React, { useState, useMemo } from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfmonths from "../../utils/months";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const options = [
    { value: 'Rodrigo', label: 'Rodrigo' },
    { value: 'Emerson', label: 'Emerson' },
    { value: 'Ana', label: 'Ana' },
  ]

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    let latestYear: number | null = null;

    [...expenses, ...gains].forEach(item => {
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
}, []);

const months = useMemo(() => {
    return listOfmonths.map((month, index) => {
        return {
            value: index + 1,
            label: month,
        }
    })
}, [])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error('invalid month value. Is accept 0 - 24')
    }
  }

  const handlYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch (error) {
      throw new Error('invalid year value. Is accept integer numbers')
    }
  }

  return (
    <Container>
      <ContentHeader title="Dashboard" linecolor="#4e41f0">
        <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={(e) => handlYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;