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
export const StatusOption = styled.ul`
    font-size: 12px;
    background-color: #F3F3F3;
    border-radius: 5px;
    z-index: 1;
    width: 120px;
    height: 80px;
    box-shadow: 0px 0px 4px rgba(0,0,0,.25);
    cursor: pointer;
    color: #353548;
    overflow: hidden;
    position: absolute;
    top: 40px;

    li{
        display: flex;
        align-items: center;
        padding-left: 20px;
        height: 33.5%;
        &:hover{
            background-color: #32589B;
            color: white;
        }
    }
    & > :nth-child(2){
        border-bottom: .5px solid rgba(51,51,51,.07);
        border-top: .5px solid rgba(51,51,51,.07);
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;
`;