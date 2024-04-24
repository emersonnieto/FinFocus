import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    >a {
        border-radius: 5px;
        background-color: #03b885;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        padding: 10px;
        margin-left:  14px;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            opacity: 0.7;
        }

        >svg{
            font-size: 18px;
            
        }
    }
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3`

`;

export const UserName = styled.span`

`;
