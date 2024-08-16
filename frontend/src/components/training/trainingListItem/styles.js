import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 20px;
    border: 1px solid rgba(51,51,51,.2);
    height: 70px;
    min-height: 70px;
    display: flex;
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

    p {
        font-size: 12px;
        color: #89898F;
    }
`;