import styled from "styled-components";

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    >h2 {
        margin-bottom: 20px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    height: 175px;
    padding-right: 15px;
    overflow-y: scroll;

`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    

    > div {
        background-color: ${prpos => prpos.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 18px;
        text-align: center;
        line-height: 40px;

    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRigth = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;

