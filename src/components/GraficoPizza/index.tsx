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

interface IGraficoPizzasProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];

}

const GraficoPizza: React.FC<IGraficoPizzasProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map(indicator => (
                        <Legend key={indicator.name} color={indicator.color} >
                            <div>{indicator.percent}</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>

        </SideLeft>

        <SideRigth>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="percent">
                            {
                                data.map((indicator) => (
                                    <Cell key={indicator.name} fill={indicator.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
        </SideRigth>
    </Container>
)

export default GraficoPizza;