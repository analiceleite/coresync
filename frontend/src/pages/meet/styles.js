import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;   
    display: flex;
    gap: 30px;
    height: 100%;
    max-height: 600px;
    max-width: 1550px;
    align-items: center;
    
    > div {
        width: 50%;
        height: 100%;
    }

    @media (max-width: 1100px){
        gap: 10px;
    }
`;
export const TitleContainer = styled.div`
    height: 20%;
`;

export const MeetListContainer = styled.div`
    height: 80%;
`;  
