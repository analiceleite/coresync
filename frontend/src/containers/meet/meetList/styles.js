import styled from 'styled-components';

export const Header = styled.div`
    height: 40px;
    margin-block: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
`;

export const List = styled.div`
    height: 80%;
    overflow-y: auto;
    padding-right: 20px;
    padding-block: 5px;
    padding-left: 2px;
    > div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        @media (max-width: 1200px){
            grid-template-columns: repeat(1, 1fr);
        }
        
    }    
`;
