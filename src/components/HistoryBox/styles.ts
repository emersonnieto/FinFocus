import styled from "styled-components";

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.withe};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;


`;

export const ChartContainer = styled.div`
    height: 260px;
    
`;

export const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;

> h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;
export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 22px;

`;
export const Legend = styled.li<ILegendProps>`
    display: flex;
    
    align-items: center;
    margin-left: 7px;
    margin-bottom: 7px;
    

    > div {
        background-color: ${prpos => prpos.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 40px;

    }

    > span {
        margin-left: 5px;
    }
`;