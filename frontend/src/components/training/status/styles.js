import styled from 'styled-components';

export const Status = styled.div`
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
    & > :first-child{
        
    }
    & > :nth-child(2){
        background-color: #32589B;
    }
`;