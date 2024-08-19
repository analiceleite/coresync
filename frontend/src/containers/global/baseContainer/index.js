import React from 'react';
import Menu from '../../../components/global/menu';
import * as S from './styles';

const BaseContainer = ({children}) => {
  return (
    <S.Container>
        <Menu/>
        <S.Main>
          <S.Content>
            {children}
          </S.Content>
        </S.Main>
    </S.Container>
  );
};

export default BaseContainer;