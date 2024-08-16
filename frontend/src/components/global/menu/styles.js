import styled from 'styled-components';

export const Aside = styled.aside`
    height: 100%;
    min-height: 100vh;
    width: 130px;
    display: flex;
    justify-content: center;
`;
export const Navbar = styled.nav`
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 10px;
    position: relative;
    position: fixed;

    ul {
        padding: 0;
        margin: 0;
    }
`;
export const MenuItem = styled.li`
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-block: 10px;
    background-color: ${ props => props.active  ? '#32589B' : 'rgba(217, 217, 217, .3)' };
    a{
        color: ${ props => props.active  ? 'white' : 'rgba(53,53,72,.8)' };
    }
    cursor: pointer;

    &:hover{
        background-color: ${ props => props.active  ? '#01164d' : 'rgba(217, 217, 217, .8)' };
    }
`;
export const Logout = styled.a`
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 65px;
    border-radius: 0px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #32589B;
    font-size: 25px;
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 20px;
    cursor: pointer;

    a{
        color: white;
    }

    &:hover {
        background-color: #01164d;
    }
    
`