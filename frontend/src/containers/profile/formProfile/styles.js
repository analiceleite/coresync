import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
`;

export const ContainerForm = styled.div`
    width: 100%;
    border-radius: 20px;
    box-shadow: 1px 1px 8px rgba(0,0,0,.25);
    padding: 35px;
    background-color: white; 
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    max-width: 500px;
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

export const ButtonCancel = styled.div`
    width: 150px;
    height: 55px;
    border-radius: 15px;
    background-color: #FFBA08;
    cursor: pointer;
    color: white;
    padding: 15px;
    font-weight: bold;
    border: none;
    text-align: center;

    &:hover{
        background-color: #C3982A;
    }
`;

export const ButtonConfirm = styled.div`
    width: 150px;
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
    margin: 15px 0px 15px 0px;  
`;

export const Label = styled.div`
    margin: 0px 5px 5px 12px;
    color: #353548;
    font-size: 16px;
`;

export const Field = styled.input`
    width: 100%;
    height: 38px;
    padding: 8px;
    font-size: 15px;
    border-radius: 10px;
    color: #353548;
    background-color: rgb(217 217 217 / 10%);
    border-top: 1px solid #D9D9D9;
    border-right: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    border-left: 15px solid ${props => props.color};
    outline: none;
    caret-color: ${ props => props.edit ? 'black' : 'transparent'};
    cursor: ${ props => props.edit ? '' : 'default'};
`;

export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
`