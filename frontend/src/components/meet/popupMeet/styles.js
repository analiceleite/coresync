import styled from 'styled-components';

export const Header = styled.div`
    position: relative;
    background-image: linear-gradient(-59deg, #1A3A72, #01164D);
    height: 35%;
    > div{
        bottom: -10%;
        left: 10%;
    }
`;

export const Content = styled.div`

`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-block: 10px;
    > div{
        h3{
            color: #353548;
        }
        p{
            font-size: 12px;
        }
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-block: 20px;
    height: 150px;
    > p{
        width: 80%;
        text-align: justify;
        font-size: 14px;
    }
`;

export const ParticipantsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > h4{
        width: 80%;
        color: #353548;
    }
    > div{
        font-size: 32px;
        padding-block: 15px;
        gap: 10px;
        width: 80%;
        color: #D9D9D9;
        display: flex;
    }
`;

export const Participants = styled.div`
    
`;

