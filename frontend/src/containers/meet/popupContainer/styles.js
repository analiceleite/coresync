import styled from 'styled-components';

export const Background = styled.div`
    background-color: rgba(0,0,0,.3);
    backdrop-filter: blur(3px);
    position: absolute;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupContainer = styled.div`
    height: 80%;
    min-height: 450px;
    max-height: 500px;
    width: 550px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    > svg{
        position: absolute;
        color: white;
        z-index: 1000;
        font-size: 30px;
        cursor: pointer;
        top: 3%;
        right: 3%;
        &:hover{
            color: #72C8F3;
        }
    }
`;




