import styled from 'styled-components';

export const StatusSelector = styled.div`
    height: 30px;
    font-size: 12px;
    display: flex;
    border-radius: 5px;
    border: 0.5px solid rgba(51,51,51,.2);
    
    div{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 10px;
    }
    & > :nth-child(2){
        background-color: #32589B;
        color: white;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        &:hover{
            background-color: #2C4F8D;
        }
        & > :nth-child(2){
            font-size: 16px;
        }   
    }
`;
export const StatusMenu = styled.div`
    
`;
export const Container = styled.div`
    
`;