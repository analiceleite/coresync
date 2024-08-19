import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    min-width: 250px;
    /* width: 250px; */
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.25);
    overflow: hidden;
`;

export const Header = styled.div`
    position: relative;
    background-color: black;
    height: 55%;
    background-image: linear-gradient(-59deg, #1A3A72, #01164D);

    > div{
        bottom: -10%;
        left: 5%;
    }
`;

export const Content = styled.div`
    padding: 20px 10px 10px 20px;
    position: relative;
    h3{
        font-size: 14px;
        color: #353548;
    }
    p{
        font-size: 12px;
        color: #89898F;
    }
`;

export const SeeMore = styled.div`
    position: absolute;
    font-size: 12px;
    color: #1A3A72;
    right: 5%;
    bottom: 5%;
    display: flex;
    align-items: end;
    gap: 5px;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        color: #72C8F3;
    }
`;

export const DateView = styled.div`
    position: absolute;
    background-color: white;
    height: ${props => props.big ? '70px' : '50px'};
    width: ${ props => props.big ? '70px' : '50px'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.25);

    p{
        color: #1A3A72;
        font-size: ${props => props.big ? '18px' : '14px'};
    }
`
