import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 20px;
    border: 1px solid rgba(51,51,51,.2);
    height: 70px;
    min-height: 70px;
    display: flex;
    cursor: pointer;
    position: relative;
    &:hover{
        border: 1px solid rgba(51,51,51,.5);
        background-color: #F3F3F3;
    }
    overflow: hidden;
`;
export const ColorContainer = styled.div`
    background-color: ${props => props.color};
    width: 15px;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;
export const TrainingContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 20px;

    h3 {
        color: #333333;
        font-size: 18px;
    }
    p {
        font-size: 12px;
        color: #89898F;
    }
`;
export const Check = styled.div`
    position: absolute;
    font-size: 24px;
    right: 3%;
    top: 15%;
    color: #62D0A8;
`;