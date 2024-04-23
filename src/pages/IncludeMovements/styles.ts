import styled from "styled-components";

export const Container = styled.div`

`;


export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #666666;
        
`;
export const ContentDescription = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
  }

  input,
  select {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #666666;
  }

`;
export const ContentAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    color: #666666;
    
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #666666;
  }
`;
export const ContentType = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  label {
    margin-left: 10px;
    color: #666666;
  }

  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #666666;
  }
`;
export const ContentFrequency = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    color: #666666;
  }

  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #666666;
  }
`;
export const ContentDate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 83px;

  label {
    margin-left: 10px;
    color: #666666;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #666666;
  }
`;
export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #4e41f0;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3c31b9;
    }
  }
`;
