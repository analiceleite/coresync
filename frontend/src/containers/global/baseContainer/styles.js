import styled from 'styled-components';

export const Container = styled.div`
    display: flex;    
    height: 100vh;
    width: 100vw;
    min-width: 1024px;
    min-height: 585px;
`;
export const Main = styled.main`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1260px){
        padding-left: 0px;
        padding-right: 20px;
    }
`;

export const Content = styled.section`
    width: 100%;   
    display: flex;
    gap: 30px;
    height: 100%;
    max-height: 600px;
    max-width: 1550px;
    align-items: center;
    
    & > div {
        width: 50%;
        height: 100%;
    }

    @media (max-width: 1100px){
        gap: 10px;
    }
`;