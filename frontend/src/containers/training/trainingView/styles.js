import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    max-width: 600px;
    border-radius: 20px;
    box-shadow: 1px 1px 8px rgba(0,0,0,.25);
    padding: 35px;
    margin: auto;
    @media (max-width: 1260px){
        padding-inline: 20px;
    }
`;
export const Header = styled.header`
    width: 100%;
    height: 90px;
    margin-bottom: 20px;
    border-bottom: 2px solid rgba(51,51,51,.1);
    display: flex;

    & > :first-child{
        width: 60%;
        @media(max-width: 1100px){
            width: 55%;
        }
    }
    & > :nth-child(2){
        width: 40%;
        display: flex;
        padding-top: 5px;
        justify-content: end;
        @media(max-width: 1100px){
            width: 45%;
        }
    }
    & > div{
        height: 100%;
        h2 {
            color: #333333;
            font-size: 24px;
            padding-bottom: 5px;

            @media (max-width: 1260px){
                font-size: 20px;
            };
        }
        p {
            font-size: 12px;
            color: #89898F;
        }
    }
`;
export const Content = styled.div`
    height: 70%;
    overflow: hidden;
    overflow-y: auto;
    p{
        font-size: 14px;
    }
    padding-right: 10px;
    margin: auto;
`;
export const VideoContainer = styled.div`
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    height: 260px;
    background-color: rgba(0,0,0,.3);
    margin-block: 20px;
`
export const Video = styled.video`
    width: 100%;
    height: 100%;
`;
export const PolkaDotsContainer = styled.div`
    width: 100%;
    padding-block: 10px;
    display: flex;
    justify-content: end;
`