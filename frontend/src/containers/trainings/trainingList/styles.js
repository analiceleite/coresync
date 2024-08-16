import styled from 'styled-components';

export const NavbarTraining = styled.nav`
    margin-block: 10px;  
    padding-block: 10px;
    position: relative;
    
    ul {
        display: flex;
        gap: 40px;
    }
`;

export const NavbarTrainingItem = styled.li`
    font-size: 18px;
    cursor: pointer;
`;

export const Underline = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #FFBA08;    
    transition: transform 0.3s ease;
    width: ${
        props => props.active === 0 ? 
        '48px'
        : 
        '90px' 
    };
    transform: ${
        props => props.active === 0 ? 
        'translateX(calc(100% / 4 * 0))'
        : 
        'translateX(calc(100% / 4 * 3.9))' 
    };
`;

export const ListTraining = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right:10px;
    height: 320px;
    overflow: hidden;
    overflow-y: auto;
`
