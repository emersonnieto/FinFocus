import React from "react";
import {
    PieChart,
    ResponsiveContainer,
    Pie,
    Cell
} from 'recharts';

import {
    Container,
    SideLeft,
    Legend,
    LegendContainer,
    SideRigth
} from "./styles";


const GraficoPizza: React.FC = () => (
    <Container>
        <SideLeft>
        <h2>Relação</h2>
            <LegendContainer>
                <Legend color = "#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>

                </Legend>

                <Legend color = "#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>

                <Legend color = "#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>

                <Legend color = "#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>

                <Legend color = "#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>

                <Legend color = "#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </SideLeft>
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={[]}
                    labelLine={false}
                    dataKey="percent"
                />
            </PieChart>
        </ResponsiveContainer>
        <SideRigth>

        </SideRigth>
    </Container>
)

export default GraficoPizza;