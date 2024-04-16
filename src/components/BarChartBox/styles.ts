import styled from "styled-components";

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
    padding: 30px 20px;

> h2 {
    margin-bottom: 10px;
}
`;

export const SideRight = styled.div`
    
    min-height: 150px;
`;