import React, { useState, useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import GraficoPizza from "../../components/GraficoPizza";
import HistoryBox from "../../components/HistoryBox";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfmonths from "../../utils/months";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import ufaaImg from "../../assets/grinning.svg";


import {
  Container,
  Content
} from "./styles";



const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('invalid amount! Amount must be number')
        }
      }
    })
    return total;
  }, [monthSelected, yearSelected]);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('invalid amount! Amount must be number')
        }
      }
    })
    return total;
  }, [monthSelected, yearSelected]);

  const message = useMemo(() => {
    if ((totalGains - totalExpenses) < 0) {
      return {
        title: "Que triste",
        description: "Neste mês gasto mais do que deveria.",
        footerText: "Verifique seus gasto e tente corta algo se nescessario",
        icon: sadImg
      }
    } else if ((totalGains - totalExpenses) === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, gastou exatamente oque ganhou.",
        footerText: "Tenha cuidado. No próximo tente poupar",
        icon: ufaaImg
      }
    } else {
      return {
        title: "Muito bem!",
        description: "Sua Carteira esta positiva.",
        footerText: "Continue assim",
        icon: happyImg
      }
    }

  }, [totalGains, totalExpenses])

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const gainsPercent = (totalGains / total) * 100;
    const expensesPercent = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(gainsPercent.toFixed(1)),
        color: '#03b885',
      },

      {
        name: "Saidas",
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(1)),
        color: '#E44C4E',
      },

    ];

    return data;

  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfmonths.map((_, month) => {

      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount)
          } catch {
            throw new Error('amountEntry is invalid. amountEntry must be valid numbner')
          }
        }
      });

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount)
          } catch {
            throw new Error('amountOutput is invalid. amountOutput must be valid numbner')
          }
        }
      });

      return {
        monthNumber: month,
        month: listOfmonths[month].substring(0, 3),
        amountEntry,
        amountOutput
      }

    }).filter(item => {
      const currencyMonth = new Date().getMonth();
      const currencyYear = new Date().getFullYear();

      return (yearSelected === currencyYear && item.monthNumber <= currencyMonth) || (yearSelected < currencyYear)
    });
  }, [yearSelected])

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

      <Content>
        <WalletBox
          title="saldo"
          amount={totalGains - totalExpenses}
          footerlabel="atualizado com base no saldo"
          icon="dollar"
          color="#4E41f0"
        />

        <WalletBox
          title="entradas"
          amount={totalGains}
          footerlabel="atualizado com base nas entradas"
          icon="arrowUp"
          color="#03b885"
        />

        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerlabel="atualizado com base nas saidas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <GraficoPizza data={relationExpensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#03b885"
          lineColorAmountOutput="#E44C4E"
        />

      </Content>

    </Container>
  );
};

export default Dashboard;