import styled from "styled-components";

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    display: flex;
    width: 48%;
    min-height: 260px;
    
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    padding-left: 16px;
`;

export const SideLeft = styled.div`
    flex: 1;
    padding: 30px 20px;
    

> h2 {
    margin-bottom: 10px;
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
        font-size: 14px;
        text-align: center;
        line-height: 40px;

    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.div`
    flex: 1;
    min-height: 150px;

    display: flex;
    justify-content: center;
    padding-top: 35px;
`;