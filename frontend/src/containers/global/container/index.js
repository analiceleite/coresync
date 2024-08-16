import React from 'react';
import Menu from '../../../components/global/menu';
import { Main, Container as ContainerStyle } from './styles';

const Container = ({children}) => {
  return (
    <ContainerStyle>
        <Menu/>
        <Main>
            {children}
        </Main>
    </ContainerStyle>
  );
};

export default Container;