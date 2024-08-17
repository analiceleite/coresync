import styled from 'styled-components';

export const Background = styled.div`
    height: 600px;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerForm = styled.div`
    width: 550px;
    height: 450px;
    border-radius: 20px;
    box-shadow: 1px 1px 10px rgb(215 215 215 / 27%);
    background-color: white; 
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin-bottom: 35px;
`;

export const ButtonEdit = styled.div`
    width: 250px;
    height: 55px;
    border-radius: 15px;
    background-color: #32589B;
    cursor: pointer;
    color: white;
    padding: 15px;
    font-weight: bold;
    border: none;
    text-align: center;

    &:hover{
        background-color: #01164D;
    }
`;

export const FormGroup = styled.div`
    margin: 25px 0px 25px 0px;  
`;

export const Label = styled.div`
    margin: 0px 5px 5px 12px;
    color: #353548;
    font-size: 16px;
`;

export const Field = styled.div`
    width: 50vh;
    height: 38px;
    padding: 8px;
    font-size: 15px;
    border-radius: 10px;
    color: #353548;
    background-color: rgb(217 217 217 / 10%);
    border-left: 15px solid #72C8F3;
`;