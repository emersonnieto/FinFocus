import styled from "styled-components";

interface IContainerProps {
    color: string;
};

interface ItagProps {
    color: string;
};

export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.color};
    list-style: none;
    
`;

export const Tag = styled.div<ItagProps>`

`;