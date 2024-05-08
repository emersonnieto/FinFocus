import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    >h2 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }

    >img {
        width: 40px;
        height: 40px;
    }
`;

export const Form = styled.form`
    width: 640px;
    height: 640px;
    padding: 30px;
    border-radius: 10px;

    background-color: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
font-size: 20px;
margin-bottom: 40px;

color: ${props => props.theme.colors.white};

    &::after {
        content: "";
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
`;


export const ContentType = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-direction: column;

  label {
    margin-right: 15px;
  }

  input,
  select {
    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;
  }

`;



