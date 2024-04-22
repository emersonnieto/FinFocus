import styled from "styled-components";

export const Container = styled.div`

`;

export const ContentForm = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        min-width: 100vh;
        flex-direction: column;
        padding: 20px 30px;
        border: 2px solid black;
        font-size: 24px;
        color: black;
        background-color: white;
        
`;
export const ContentDescription = styled.div`
    display: flex;
    margin-bottom: 20px;
    
    >input{
        border: 1px solid gray;
        width: 300px;
        margin-left: 10px;
    }

`;
export const ContentAmount = styled.div`
    display: flex;
    margin-bottom: 20px;  
    >input{
        border: 1px solid gray;
        width: 300px;
        margin-left: 10px;
    }
`;
export const ContentType = styled.div`
    display: flex;
    margin-left: 20px;

    >select{
        border: 1px solid gray;
        margin-left: 10px;
    }
`;
export const ContentFrequency = styled.div`
    display: flex;
    margin-bottom: 20px;

    >select{
        border: 1px solid gray;
        margin-left: 10px;
    }
`;
export const ContentDate = styled.div`
    display: flex;
    margin-left: 50px;
    >input{
        border: 1px solid gray;
        margin-left: 10px;

    }
`;
export const ContentButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    >button{
        background-color: #4e41f0;
        color: white;
        height: 50px;
        padding: 10px;
        border-radius: 5px;
    }

`;
